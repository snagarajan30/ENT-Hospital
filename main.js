

// // function nextSlide() {
// //     const nextIndex = (currentIndex + 1) % slides.length;
// //     showSlide(nextIndex);
// // }

// // function prevSlide() {
// //     const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
// //     showSlide(prevIndex);
// // }

// // lines.forEach((line, index) => {
// //     line.addEventListener('click', () => {
// //         if (index !== currentIndex) {
// //             showSlide(index);
// //         }
// //     });
// // });

// // Initial display
// showSlide(currentIndex);

// const hamburger = document.getElementById('hamburger');
// const sideMenu = document.getElementById('side-menu');

// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('active');
//     sideMenu.classList.toggle('active');
// });

// const divs = document.querySelectorAll('.treatments');

// divs.forEach(div => {
//     div.addEventListener('click', function() {
//         // Remove the 'active' class from all divs
//         divs.forEach(d => d.classList.remove('active'));
        
//         // Add the 'active' class to the clicked div
//         this.classList.add('active');
//     });
// });


// $(document).ready(function() {if ( $(window).width() < 835 ) {startCarouselyt();} else {$('.profileCarousel').addClass('off');}});    
//          $(window).resize(function() {if ( $(window).width() < 835 ) {startCarouselyt();} else {stopCarousel();}});
// 		 function startCarouselyt(){       
//            $(".profileCarousel").owlCarousel({
//               slideSpeed : 500,
//               margin:10,
//               paginationSpeed : 400,
//               autoplay:true,
//                autoplayHoverPause:true,
//               items : 1,
//                 dots: true,
//               loop:true,
//               nav:true,
//               responsive: {
//     0: {
//         items: 1
//     },
//     769: { // You can use 600 or 767 as per your preference
//         items: 2
//     },
//     835: {
//         items: 3
//     }
// }
//            });
//          }
		  
// 		   function stopCarousel() {
//            var owl = $('.twocols');
//            owl.trigger('destroy.owl.carousel');
//            owl.addClass('off');
//          }


       