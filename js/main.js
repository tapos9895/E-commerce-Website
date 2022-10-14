
/* start banner slick js
   =========comment==========*/
 
$('.banner_part').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:".banner_prev",
  nextArrow:".banner_next",
});
/* end banner slick js
   =========comment==========*/

   /* start product slick js
   =========comment==========*/
$('.product_part').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow:".product_prev",
  nextArrow:".product_next",
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
  ]
 
});

  /* end product slick js
   =========comment==========*/

     /* start testiomial slick js
   =========comment==========*/

$('.testimonial_item').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow:".textimonial_prev",
  nextArrow:".textimonial_next",
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  
  
   
  ]
 
  
});

  /* end testiomial slick js
   =========comment==========*/

  /* start  partner-part slick js
   =========comment==========*/
$('.partner-part').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow:".partner_prev",
  nextArrow:".partner_next",
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
  ]
});

/* end partner-part slick js
   =========comment==========*/
                  
 
  /* start feature isotope js
   =========comment==========*/
var $grid = $('.grid').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

$('.filter-button-group button').on('click', function(event) {
  $(this).siblings('.active').removeClass('active');
  $(this).addClass('active');
  event.preventDefault();
});


// // home counter timer

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

// Get today's date and time
var now = new Date().getTime();

// Find the distance between now and the count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Display the result in the element with id="demo"
document.getElementById("demo").innerHTML = days + " ";
document.getElementById("demo1").innerHTML = hours + " ";
document.getElementById("demo2").innerHTML = minutes + "";
document.getElementById("demo3").innerHTML = seconds + " ";
// If the count down is finished, write some text
if (distance < 0) {
clearInterval(x);
document.getElementById("demo").innerHTML = "EXPIRED";
}
}, 1000);



/// scroll js
$(window).scroll(function(){
  var scrolling = $(window).scrollTop();
  if (scrolling > 20){
    $(".menu_bg").addClass("bg")
  }else{
    $(".menu_bg").removeClass("bg")
  }

})


//sidemenu start
$(".troggole").click(function(){
  $(".sidemenu").toggleClass("bg")

})

//li remove class
$("li").click(function(){
	$(".sidemenu").removeClass("bg")
  })








  





  $(document).ready(function () {
    jQuery('<div class="quantity-nav"><button class="quantity-button quantity-up">&#xf106;</button><button class="quantity-button quantity-down">&#xf107</button></div>').insertAfter('.quantity input');
      $(document).on('keyup', 'input[name=quantity]', function() {
    var _this = $(this);
    var min = parseInt(_this.attr('min')) || 1; // if min attribute is not defined, 1 is default
    var max = parseInt(_this.attr('max')) || 100; // if max attribute is not defined, 100 is default
    var val = parseInt(_this.val()) || (min - 1); // if input char is not a number the value will be (min - 1) so first condition will be true
    if (val < min)
      _this.val(min);
    if (val > max)
      _this.val(max);
  });
    jQuery('.quantity').each(function () {
      var spinner = jQuery(this),
          input = spinner.find('input[type="number"]'),
          btnUp = spinner.find('.quantity-up'),
          btnDown = spinner.find('.quantity-down'),
          min = input.attr('min'),
          max = input.attr('max');
  
      btnUp.click(function () {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });
  
      btnDown.click(function () {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });
  
    });
  });

// nice number
  $(function(){

    $('input[type="number"]').niceNumber();
  
  });

  //click
  $(".clickkk").click(function(){
    $(".class_input").toggleClass("adinput")
  })