$(document).ready(function() {

 
  var owl = $("#owl-demo");
 
  owl.owlCarousel({
      autoplay : true,
      items : 8, //10 items above 1000px browser width
      margin:10,
      responsiveClass:true,
      responsive:{
        0:{
              items:3,
            loop:true,
            margin:30
        },
        300:{
            items:3,
            loop:true,
            margin:30
        },
        600:{
            items:4,
            loop:true,
            margin:30
        },
        
        800:{
            items:5,
            loop:true
        },
        1200:{
            items:6,
            loop:true
        }
      }
      // itemsMobile disabled - inherit from itemsTablet option
  });
  // Custom Navigation Events

// creating side nav animation
  flag=0;
  $('.default').click(function() {
    if(flag==0)
    {
      $('.sidenav').css({
        display: 'inline',
        width: '70%'
      });
      $('.logo').css({
        display: 'block',
      });
       $('.list-group-item').css({
        display: 'block',
      });
        $('.sidenav .dropdown').css({
        display: 'block',
      });
      $('.sidenav .icons').css({
        display: 'block',
      });
      flag=1;
    }
    else
    {
      $('.sidenav').css({
        width: '-500px'

      });
      $('.logo').css({
        display: 'none',
      });
      $('.list-group-item').css({
        display: 'none',
      });
      $('.sidenav .dropdown').css({
        display: 'none',
      });
      $('.sidenav .icons').css({
        display: 'none',
      });
      flag=0;
    }
  });

$('.dropdown').click(function() {
  $('.dropdown-menu').animate({height: auto}, 1000);
});

  $(".timer").countTo();
  $('#try').datepicker({
    autoClose : true
  });


   var myAccordion = new $.Zebra_Accordion('.Zebra_Accordion');

  $(function () {
  $('[data-toggle="tooltip"]').tooltip();
});


$('#selector').swish('swish-zoom', 1000);

});


//**********spinner**************

// $(window).on('load' , function() {
//   $(".loading-screen .spinner").fadeOut(2000,
//     function(){
//       $(this).parent().fadeOut(2000,
//         function(){
//             $("body").css("overflow" , "auto");
//             $(this).remove();
//         });
//     });
// });


$(document).ready(function() {
    var myAccordion = new $.Zebra_Accordion('.Zebra_Accordion', {
        collapsible: true
    });
});






$(window).on('load' , function() {
  $(".loading-screen .spinner").fadeOut(2000,
    function(){
      $(this).parent().fadeOut(2000,
        function(){
            $("body").css("overflow" , "auto");
            $(this).remove();
        });
    });
});