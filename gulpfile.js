"use strict";

// Gulp Components

const { series, parallel, src, dest, watch } = require("gulp");

// Image Minimization

const imagemin = require("gulp-imagemin"),
  sass = require("gulp-sass")(require("sass")),
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify"),
  babel = require("gulp-babel"),
  bs = require("browser-sync");

// Scss Compile

const scssCompile = () =>
  //src('./src/sass/main.scss')
  src(["src/sass/main.scss", "src/sass/fonts.scss", "src/sass/pages/*"])
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))

    .pipe(dest("build/css"));

// Javascript Minify / Concatinating

const jsCompile = () =>
  src(["./src/js/functions.js"])
    // .pipe(babel({

    //     presets: ['@babel/env']

    // }))

    .pipe(uglify())

    .pipe(dest("build/js"))

    .pipe(
      concat("all.js", {
        newLine: ";\n",
      })
    )

    .pipe(dest("./build/js"));

// Image Minimization

const imageMin = () =>
  src("./src/images/**/*")
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest("./build/images"));

// Copy Fonts

const copyFonts = () => src("./src/fonts/*").pipe(dest("build/fonts"));

// All Tasks

const tasks = () => (
  watch("./src/js/*.js", jsCompile),
  watch("./src/sass/**/*", scssCompile),
  watch("./src/fonts/*", copyFonts),
  watch("./src/images/*", imageMin),
  watch([
    "./*.*",
    "./*.*",
    "./**/.*",
    "./src/sass/**/**/*.scss",
    "./src/sass/**/*.scss",
    "./src/sass/*.scss",
  ]).on("change", bs.reload),
  // Browser Sync Initiate
  bs.init({
    proxy: "http://localhost/dashboard-ui",
  }),
  // Browser Sync Reload
  bs.reload({
    stream: true,
  })
);

// Tasks

exports.tasks = series(tasks);

exports.scssCompile = series(scssCompile);

exports.jsCompile = series(jsCompile);

exports.copyFonts = series(copyFonts);

exports.imageMin = series(imageMin);

// Default Task

exports.default = parallel(jsCompile, scssCompile, copyFonts, imageMin);
