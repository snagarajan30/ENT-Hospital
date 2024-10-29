$(document).ready(function () {
  $(".navbar-container .hamburger").on("click", function () {
    $(".navbar-container .hamburger").toggleClass("active");
    $(".side-menu").toggleClass("active");
    // console.log('test1');
  });
});

// Handling the click event for treatments divs
const divs = document.querySelectorAll(".treatments");
divs.forEach((div) => {
  div.addEventListener("click", function () {
    divs.forEach((d) => d.classList.remove("active")); // Remove 'active' class
    this.classList.add("active"); // Add 'active' class to clicked div
  });
});

// Autoplay slide functionality
$(document).ready(function () {
  let currentSlide = 1;
  const totalSlides = 3;
  const intervalTime = 4000;

  function goToNextSlide() {
    currentSlide++;
    if (currentSlide > totalSlides) {
      currentSlide = 1; // Loop back to the first slide
    }
    $("#slide" + currentSlide).prop("checked", true);
  }

  let slideInterval = setInterval(goToNextSlide, intervalTime);

  $(".carousel").hover(
    function () {
      clearInterval(slideInterval); // Pause slideshow on hover
    },
    function () {
      slideInterval = setInterval(goToNextSlide, intervalTime); // Resume slideshow
    }
  );
});

// Profile Carousel
$(document).ready(function () {
  if ($(window).width() < 835) {
    startCarouselyt();
  } else {
    $(".profileCarousel").addClass("off");
  }
});

$(window).resize(function () {
  if ($(window).width() < 835) {
    startCarouselyt();
  } else {
    stopCarousel();
  }
});

function startCarouselyt() {
  $(".profileCarousel").owlCarousel({
    slideSpeed: 500,
    margin: 10,
    paginationSpeed: 400,
    autoplay: false,
    autoplayHoverPause: true,
    items: 3,
    dots: true,
    loop: true,
    nav: true,
    responsive: {
      0: { items: 1 },
      495: { items: 2 },
      600: { items: 2 },
      835: { items: 3 },
    },
  });
}

function stopCarousel() {
  var owl = $(".twocols");
  owl.trigger("destroy.owl.carousel");
  owl.addClass("off");
}

// Treatment Carousel
$(document).ready(function () {
  if ($(window).width() < 835) {
    treatmentCarousel();
  } else {
    $(".treatmentCarousel").addClass("off");
  }
});

$(window).resize(function () {
  if ($(window).width() < 835) {
    treatmentCarousel();
  } else {
    stopBlogCarousel();
  }
});

function treatmentCarousel() {
  $(".treatmentCarousel").owlCarousel({
    slideSpeed: 500,
    margin: 10,
    paginationSpeed: 400,
    autoplay: true,
    autoplayHoverPause: true,
    items: 1,
    dots: true,
    rewind: true,
    nav: true,
    responsive: {
      0: { items: 1 },
      430: { items: 1 },
      480: { items: 1 },
      481: { items: 2 },
      769: { items: 2 },
      835: { items: 3 },
    },
  });
}

function stopBlogCarousel() {
  var owl = $(".treatmentCarousel");
  owl.trigger("destroy.owl.carousel");
  owl.removeClass("owl-carousel owl-loaded");
  owl.find(".owl-stage-outer").children().unwrap();
  owl.removeClass("off");
}

// Nose Treatment Carousel
$(document).ready(function () {
  if ($(window).width() < 835) {
    treatmentnoseCarousel();
  } else {
    $(".noseTreatmentCarousel").addClass("off");
  }
});

$(window).resize(function () {
  if ($(window).width() < 835) {
    treatmentnoseCarousel();
  } else {
    stopBlogCarousel();
  }
});

function treatmentnoseCarousel() {
  $(".noseTreatmentCarousel").owlCarousel({
    slideSpeed: 500,
    margin: 10,
    paginationSpeed: 400,
    autoplay: true,
    autoplayHoverPause: true,
    items: 1,
    dots: true,
    rewind: true,
    nav: true,
    responsive: {
      0: { items: 1 },
      430: { items: 1 },
      480: { items: 1 },
      481: { items: 2 },
      769: { items: 2 },
      835: { items: 3 },
    },
  });
}

// Throat Treatment Carousel
$(document).ready(function () {
  if ($(window).width() < 835) {
    treatmentthroatCarousel();
  } else {
    $(".throatTreatmentCarousel").addClass("off");
  }
});

$(window).resize(function () {
  if ($(window).width() < 835) {
    treatmentthroatCarousel();
  } else {
    stopBlogCarousel();
  }
});

function treatmentthroatCarousel() {
  $(".throatTreatmentCarousel").owlCarousel({
    slideSpeed: 500,
    margin: 10,
    paginationSpeed: 400,
    autoplay: true,
    autoplayHoverPause: true,
    items: 1,
    dots: true,
    rewind: true,
    nav: true,
    responsive: {
      0: { items: 1 },
      430: { items: 1 },
      480: { items: 1 },
      481: { items: 2 },
      769: { items: 2 },
      835: { items: 3 },
    },
  });
}

// Blog Carousel
$(document).ready(function () {
  if ($(window).width() < 835) {
    blogCarousel();
  } else {
    $(".blogCarousel").addClass("off");
  }
});

$(window).resize(function () {
  if ($(window).width() < 835) {
    blogCarousel();
  } else {
    stopBlogCarousel();
  }
});

function blogCarousel() {
  $(".blogCarousel").owlCarousel({
    slideSpeed: 500,
    margin: 10,
    paginationSpeed: 400,
    autoplay: false,
    autoplayHoverPause: true,
    items: 3,
    dots: true,
    loop: true,
    nav: true,
    responsive: {
      0: { items: 1 },
      480: { items: 1 },
      495: { items: 2 },
      769: { items: 3 },
      835: { items: 3 },
    },
  });
}

// Quick Links toggle
$(document).ready(function () {
  $(".quickLinks-headingContainer").on("click", function () {
    $(".footer-dropdown1").toggleClass("active");
    $(".footersvg1").toggleClass("down");
  });
});

// Hamburger menu toggle

// Treatments Heading toggle
$(document).ready(function () {
  $(".treatmentsHeading-container").on("click", function () {
    $(".footer-dropdown2").toggleClass("active");
    $(".footersvg2").toggleClass("down");
  });
});

// Reach Us toggle
$(document).ready(function () {
  $(".reachUs-headingContainer").on("click", function () {
    $(".footerAddr-container").toggleClass("active");
    $(".footersvg3").toggleClass("down");
  });
});

// Treatment link SVG toggle
$(document).ready(function () {
  $(".treatmentLink-svg").on("click", function () {
    $(".treaments-link").toggleClass("down");
    $(".treatmentLink-svg").toggleClass("active");
  });
});

// Testimonial carousel
$(document).ready(function () {
  $(".tesimonialscarousel").owlCarousel({
    slideSpeed: 500,
    margin: 10,
    paginationSpeed: 400,
    autoplay: true,
    autoplayHoverPause: true,
    smartSpeed: 600,
    items: 1,
    dots: true,
    loop: true,
    nav: true,
  });
});

// Scroll to top button
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $("#scrollUp").fadeIn();
    } else {
      $("#scrollUp").fadeOut();
    }
  });
});

// Counter animation on scroll
var counted = 0;
$(window).scroll(function () {
  var oTop = $("#counter").offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $(".count-head").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 2000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
    counted = 1;
  }
});
// FAq
const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

    const currentlyActiveAccordionItemHeader = document.querySelector(
      ".accordion-item-header.active"
    );

    if (
      currentlyActiveAccordionItemHeader &&
      currentlyActiveAccordionItemHeader !== accordionItemHeader
    ) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }
    accordionItemHeader.classList.toggle("active");

    const accordionItemBody = accordionItemHeader.nextElementSibling;

    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

//Infrastructure slider

$(document).ready(function () {
  $(".infraCarousel").owlCarousel({
    slideSpeed: 500,
    margin: 10,
    paginationSpeed: 400,
    autoplay: true,
    autoplayHoverPause: true,
    smartSpeed: 600,
    items: 1,
    dots: true,
    loop: true,
    nav: true,
    navText : ['<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 1024 1024"><path fill="#192751" d="M609.408 149.376L277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0a30.59 30.59 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.59 30.59 0 0 0 0-42.688a29.12 29.12 0 0 0-41.728 0"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 1024 1024"><path fill="#192751" d="M340.864 149.312a30.59 30.59 0 0 0 0 42.752L652.736 512L340.864 831.872a30.59 30.59 0 0 0 0 42.752a29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"/></svg>'],
    responsive:{
      0:{
               items:1,
           },
           480:{
               items:1,
           },
          767:{
            items:1,
          },
      992:{
               items:1,
           },
       }
  });
});
