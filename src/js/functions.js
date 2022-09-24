function scrollhandler() {
  element = document.querySelectorAll(
    "[data-srcset],[data-src], [data-bgimage]"
  );
  for (var i = 0, len = element.length; i < len; i++) {
    if (
      element[i].getBoundingClientRect().top - window.innerHeight <
      window.pageYOffset
    ) {
      if (
        !element[i].dataset.hasOwnProperty("bgimage") &&
        element[i].dataset.hasOwnProperty("src")
      ) {
        element[i].setAttribute("src", element[i].dataset.src);
        element[i].removeAttribute("data-src");
      } else if (element[i].dataset.hasOwnProperty("srcset")) {
        element[i].setAttribute("srcset", element[i].dataset.srcset);
        element[i].removeAttribute("data-srcset");
      } else {
        element[i].removeAttribute("data-bgimage");
      }
    }
  }
}

scrollhandler();
window.addEventListener(
  "scroll",
  (e) => {
    window.requestAnimationFrame(scrollhandler);
  },
  { passive: true }
);

/**
 * @const { Node } sidebar The sidebar element
 */
const sidebar = document.querySelector(".sticky");
if (sidebar) {
  /**
   * Make sidebar scroll to the bottom before implementing sticky
   * behavior on screens shorter than the height of the sidebar
   * @param { Node } ELEMENT
   * @param { Number } PADDING
   * @param { Number } WINDOWHEIGHT
   */
  const handleStickyElement = (ELEMENT, PADDING, WINDOWHEIGHT) => {
    /**
     * @const { Node } header Website header element
     */
    //const _header = document.querySelector(".site-header");
    //const _availableSpace = WINDOWHEIGHT - _header.scrollHeight + 16;
    const _availableSpace = WINDOWHEIGHT + 16;
    if (ELEMENT.scrollHeight > _availableSpace) {
      ELEMENT.style.top = `${
        _availableSpace - ELEMENT.scrollHeight - PADDING
      }px`;
    } else {
      ELEMENT.style.top = "0";
    }
  };
  /**
   * Function to call the sticky handler on window resize
   */
  const handleResize = () => {
    handleStickyElement(sidebar, 10, window.innerHeight);
  };
  /**
   * Invoke the sticky handler function on page load
   */
  handleStickyElement(sidebar, 10, window.innerHeight);
  /**
   * Add an event listener to the window to run this function anytime
   * the window is resized
   */
  window.addEventListener("resize", handleResize);
}


$('[data-active-toggle]').click(function(){
  $(this).toggleClass('active')
})

$('[search]').keydown(function() {
  const dropdownClass = $(this).attr('data-target-dropdown')
  if($(this).val().length > 0) {
    $(`.${dropdownClass}`).css('display', 'block')
  } else {
    $(`.${dropdownClass}`).css('display', 'none')
  }
});



/* Chart start */
var options = {
  series: [
    {
      data: [10, 20, 15, 30, 35, 30, 45, 59, 30, 35, 25, 29, 15]
    }
  ],
  chart: {
    type: "area",
    height: 350,
    background: "#19191E",
    dropShadow: {
      enabled: true,
      color: "#000"
    },
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    colors: ["#FFFFFF"]
  },
  stroke: {
    curve: "smooth",
    width: 3,
    fill: {
      type: "gradient",
      gradient: {
        type: "horizontal",
        colorStops: [
          [
            {
              offset: 0,
              color: "#243B55",
              opacity: 1
            },
            {
              offset: 33,
              color: "#243B55",
              opacity: 1
            },
            // {
            //   offset: 80,
            //   color: "#FFAC2F",
            //   opacity: 1
            // },
            {
              offset: 99,
              color: "#243B55",
              opacity: 1
            }
          ]
        ]
      }
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      type: "vertical",
      colorStops: [
        [
          {
            offset: 0,
            color: "#141E30",
            opacity: 1.0
          },
          {
            offset: 70,
            color: "#243B55",
            opacity: 0.2
          },
          {
            offset: 97,
            color: "#243B55",
            opacity: 0.0
          }
        ]
      ]
    }
  },
  xaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      style: {
        colors: "#aaa"
      }
    }
  },
  yaxis: {
    labels: {
      show: false
    }
  },
  grid: {
    borderColor: "#212529"
  },
  legend: {
    horizontalAlign: "left"
  },
  theme: {
    mode: "dark"
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

/* Chart end */