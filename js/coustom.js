    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();



// counter up
$('.counter_up').counterUp({
    delay: 10,
    time: 1000
    });



 // owl-carousel
 $(document).ready(function(){
  $('.owl-carousel').owlCarousel();
});

 // Testimonials carousel (uses the Owl Carousel library)
  $(".owl-carousel").owlCarousel({
    autoplay: Boolean,
    slideBy:2,
    nav:true,
    dots:false,
    loop:Boolean,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 4
      },
      900: {
        items: 5
      }
    }
  });
 // owl-carousel end

  
