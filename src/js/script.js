var WOW = require("./wow.min");

(function () {
  "use strict";

  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    }
  };

  var fullHeight = function () {
    if (!isMobile.any()) {
      $(window).load(function () {
        $(".js-fullheight").css("height", $(window).height());
        $(window).on("resize", function () {
          $(".js-fullheight").css("height", $(window).height());
        });
      });
    }
  };

  // Parallax
  var parallax = function () {
    $(window).stellar();
  };

  var contentWayPoint = function () {
    var i = 0;
    $(".animate-box").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("animated-fast")
        ) {
          i++;

          $(this.element).addClass("item-animate");
          setTimeout(function () {
            $("body .animate-box.item-animate").each(function (k) {
              var el = $(this);
              setTimeout(
                function () {
                  var effect = el.data("animate-effect");
                  if (effect === "fadeIn") {
                    el.addClass("fadeIn animated-fast");
                  } else if (effect === "fadeInLeft") {
                    el.addClass("fadeInLeft animated-fast");
                  } else if (effect === "fadeInRight") {
                    el.addClass("fadeInRight animated-fast");
                  } else {
                    el.addClass("fadeInUp animated-fast");
                  }

                  el.removeClass("item-animate");
                },
                k * 100,
                "easeInOutExpo"
              );
            });
          }, 50);
        }
      },
      { offset: "85%" }
    );
  };

  var goToTop1 = function () {
    $(".js-gotop").on("click", function (event) {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $("html").offset().top
        },
        500,
        "easeInOutExpo"
      );

      return false;
    });

    $(window).on("scroll", function () {
      var $win = $(window);
      if ($win.scrollTop() > 200) {
        $(".js-top").addClass("active");
      } else {
        $(".js-top").removeClass("active");
      }
    });
  };

  var pieChart = function () {
    $(".chart").easyPieChart({
      scaleColor: false,
      lineWidth: 4,
      lineCap: "butt",
      barColor: "#FF9000",
      trackColor: "#f5f5f5",
      size: 160,
      animate: 1000
    });
  };

  var skillsWayPoint = function () {
    if ($("#fh5co-skills").length > 0) {
      $("#fh5co-skills").waypoint(
        function (direction) {
          if (direction === "down" && !$(this.element).hasClass("animated")) {
            setTimeout(pieChart, 400);
            $(this.element).addClass("animated");
          }
        },
        { offset: "90%" }
      );
    }
  };

  // Loading page
  var loaderPage = function () {
    $(window).on("load popstate", function (event) {
      $(".fh5co-loader").fadeOut("slow");
    });
  };

  /**
   * SECTION TOP: FREE HTML CO 5 SCRIPT
   *
   *
   *
   *
   *
   * SECTION BOTTOM: CarServ
   * https://themewagon.com/themes/free-html5-bootstrap-5-business-website-template-carserv/
   *
   */

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };

  // Initiate the wowjs
  var wow = function () {
    const w0w = new WOW();
    w0w.init();
  };

  // Sticky Navbar
  var stickyNavbar = function () {
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 300) {
        $(".sticky-top").css("top", "0px");
      } else {
        $(".sticky-top").css("top", "-100px");
      }
    });
  };

  var dropdown = function () {
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
      if (this.matchMedia("(min-width: 992px)").matches) {
        $dropdown.hover(
          function () {
            const $this = $(this);
            $this.addClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "true");
            $this.find($dropdownMenu).addClass(showClass);
          },
          function () {
            const $this = $(this);
            $this.removeClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "false");
            $this.find($dropdownMenu).removeClass(showClass);
          }
        );
      } else {
        $dropdown.off("mouseenter mouseleave");
      }
    });
  };

  var goToTop2 = function () {
    // Back to top button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $(".back-to-top").fadeIn("slow");
      } else {
        $(".back-to-top").fadeOut("slow");
      }
    });
    $(".back-to-top").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
      return false;
    });
  };

  var factsCounter = function () {
    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
      delay: 10,
      time: 2000
    });
  };

  var dateAndTimePicker = function () {
    // Date and time picker
    $(".date").datetimepicker({
      format: "L"
    });
    $(".time").datetimepicker({
      format: "LT"
    });
  };

  var testimonial = function () {
    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      center: true,
      margin: 25,
      dots: true,
      loop: true,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        }
      }
    });
  };

  var handleScroll = function () {
    var sections = $("section");
    var navLinks = $(".navbar-nav .nav-link");

    var currentSectionId = "";

    sections.each(function () {
      var sectionTop = $(this).offset().top;
      if ($(window).scrollTop() >= sectionTop - 60) {
        currentSectionId = $(this).attr("id");
      }
    });

    navLinks.removeClass("active");
    navLinks.each(function () {
      if ($(this).attr("href") === `#${currentSectionId}`) {
        $(this).addClass("active");
      }
    });
  };

  var navBarAutoActive = function () {
    $(window).on("scroll", handleScroll);
  };

  $(function () {
    contentWayPoint();
    goToTop1();
    loaderPage();
    fullHeight();
    parallax();
    // pieChart();
    skillsWayPoint();
    navBarAutoActive();
    /** ==============FUNCTION CALL DIFFERENCES=================== */
    spinner();
    wow();
    stickyNavbar();
    dropdown();
    // goToTop2();
    factsCounter();
    dateAndTimePicker();
    testimonial();
  });
})();
