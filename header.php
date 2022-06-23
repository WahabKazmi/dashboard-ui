<?php ob_start(); ?>
<?php header('X-Robots-Tag: noindex, nofollow'); ?>
<?php $imgHolder = 'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='; ?>
<?php

$url = $_SERVER['REQUEST_URI'];
if (strstr($url, '.php')) {

    $url = explode('/', $url);
    $fileName = end($url);
    // $fileName = str_replace('.php', '', $fileName);
    $fileName = current(explode('.', $fileName));

    if ($fileName == 'index') {
        $fileName = 'home';
    }
} else {
    $fileName = 'home';
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>NEW SITE</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, initial-scale=1.0" />
    <meta name="description" content="Coupon Sites Description" />
    <meta name="keywords" content="Coupons, Deals, Codes" />

    <!--  Chrome, Firefox OS and Opera -->
    <meta name="theme-color" content="#00572C" />
    <!-- Windows Phone -->
    <meta name="msapplication-navbutton-color" content="#00572C" />
    <!-- iOS Safari -->
    <meta name="apple-mobile-web-app-status-bar-style" content="#00572C" />

    <!-- <link rel="icon" href="favicon.png" type="image/x-icon" /> -->

    <link rel="preload" as="style" href="build/css/fonts.css" onload="this.rel='stylesheet'" crossorigin="anonymous" />

    <!-- Link Swiper's CSS -->
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />

    <style>
        <?php
        if (($fileName === 'icons')) {
            readfile("build/css/icons.css");
        } else if (($fileName === 'categories') || ($fileName === 'blog_categories')) {
            readfile("build/css/categories.css");
        } else {
            readfile("build/css/" . $fileName . ".css");
        }
        ?>
    </style>
</head>

<body>
    <main class="mainWrapper">
        <div class="overlay"></div>
        <header class="header"></header>