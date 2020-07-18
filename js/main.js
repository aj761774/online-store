'use strict';
$('document').ready(function() {
  // funtion
  function sideMenuMangage() {
    if ($('.side-navigation').css('left') == '0px') {
      $('.side-navigation').animate({
        left: '-400px'
      });
    }
    if ($('.side-navigation-Apparel').css('display') == 'block') {
      $('.side-navigation-Apparel').fadeOut();
    }
    if ($('.side-navigation-Accessories').css('display') == 'block') {
      $('.side-navigation-Accessories').fadeOut();
    }
    if ($('.side-navigation-Home-living').css('display') == 'block') {
      $('.side-navigation-Home-living').fadeOut();
    }
    if ($('.side-navigation-Essensials').css('display') == 'block') {
      $('.side-navigation-Essensials').fadeOut();
    }
    if ($('.side-navigation-women').css('display') == 'block') {
      $('.side-navigation-women').fadeOut();
    }
    if ($('.side-navigation-men').css('display') == 'block') {
      $('.side-navigation-men').fadeOut();
    }
    if ($('.side-navigation-tribes-heritage').css('display') == 'block') {
      $('.side-navigation-tribes-heritage').fadeOut();
    }
    if ($('.side-navigation-designer').css('display') == 'block') {
      $('.side-navigation-designer').fadeOut();
    }
    if ($('.side-navigation-bags').css('display') == 'block') {
      $('.side-navigation-bags').fadeOut();
    }
    if ($('.side-navigation-jewellery').css('display') == 'block') {
      $('.side-navigation-jewellery').fadeOut();
    }
    if ($('.side-navigation-stationery').css('display') == 'block') {
      $('.side-navigation-stationery').fadeOut();
    }
    if ($('.side-navigation-home-linen').css('display') == 'block') {
      $('.side-navigation-home-linen').fadeOut();
    }
    if ($('.side-navigation-artEfacts').css('display') == 'block') {
      $('.side-navigation-artEfacts').fadeOut();
    }
    if ($('.side-navigation-paintings').css('display') == 'block') {
      $('.side-navigation-paintings').fadeOut();
    }
    if ($('.side-navigation-decoratives').css('display') == 'block') {
      $('.side-navigation-decoratives').fadeOut();
    }
  };
  
  // register login section
  $('.register-form').click(()=>{
    if($('#login').css('display')=='block'){
      $('#login').modal('hide'); 
    }
    if($('#forget').css('display')=='block'){
      $('#forget').modal('hide'); 
    }
    $('#register').modal('toggle');
    });

    $('.login-form').click(()=>{
      if($('#register').css('display')=='block'){
      $('#register').modal('hide'); 
    }
    if($('#forget').css('display')=='block'){
      $('#forget').modal('hide'); 
    }
     $('#login').modal('toggle');
    });

    $('.forget-form').click(()=>{
      if($('#register').css('display')=='block'){
      $('#register').modal('hide'); 
      }
      if($('#login').css('display')=='block'){
      $('#login').modal('hide'); 
      }
     $('#forget').modal('toggle');
    });
  // register login end
  /*------------------
        Background Set
    --------------------*/
  $('.set-bg').each(function() {
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
  });
  // owl carousel
  $(".hero-items").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    dots: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    smartSpeed: 1200,
    autoplayHoverPause: true,
    mouseDrag: false,
    autoplay: true
  });

  $('.search-icon').click(function() {
    sideMenuMangage();
    $('.search-part').animate({
      top: '0'
    });
  });

  $('.search-part-close-button').click(function() {
    $('.search-part').animate({
      top: '-250px'
    });
  });

  $('.menu-button').click(function() {
    $('.side-navigation').animate({
      left: '0'
    });
  });
  $('.close-navigation').click(function() {
    $('.side-navigation').animate({
      left: '-400px'
    });
  });
  // Apparel menu
  $('.Apparel-menu').click(function() {
    $('.side-navigation-Apparel').fadeIn();
  });
  $('.submenu-close-Apparel').click(function() {
    $('.side-navigation-Apparel').fadeOut();
  });
  // accessories submenu
  $('.Accessories-menu').click(function() {
    $('.side-navigation-Accessories').fadeIn();
  });
  $('.submenu-close-Accessories').click(function() {
    $('.side-navigation-Accessories').fadeOut();
  });
  // home-living
  $('.Home-living-menu').click(function() {
    $('.side-navigation-Home-living').fadeIn();
  });
  $('.submenu-close-Home-living').click(function() {
    $('.side-navigation-Home-living').fadeOut();
  });
  // Essensials
  $('.Essensials-menu').click(function() {
    $('.side-navigation-Essensials').fadeIn();
  });
  $('.submenu-close-Essensials').click(function() {
    $('.side-navigation-Essensials').fadeOut();
  });
  // women menu
  $('.women-menu').click(function() {
    $('.side-navigation-women').fadeIn();
  });
  $('.submenu-close-women').click(function() {
    $('.side-navigation-women').fadeOut();
  });
  // men menu
  $('.men-menu').click(function() {
    $('.side-navigation-men').fadeIn();
  });
  $('.submenu-close-men').click(function() {
    $('.side-navigation-men').fadeOut();
  });
  // designer
  $('.designer-menu').click(function() {
    $('.side-navigation-designer').fadeIn();
  });
  $('.submenu-close-designer').click(function() {
    $('.side-navigation-designer').fadeOut();
  });
  // tribes heritage
  $('.tribes-heritage-menu').click(function() {
    $('.side-navigation-tribes-heritage').fadeIn();
  });
  $('.submenu-close-tribes-heritage').click(function() {
    $('.side-navigation-tribes-heritage').fadeOut();
  });
  // jewellery
  $('.jewellery-menu').click(function() {
    $('.side-navigation-jewellery').fadeIn();
  });
  $('.submenu-close-jewellery').click(function() {
    $('.side-navigation-jewellery').fadeOut();
  });
  // bags
  $('.bags-menu').click(function() {
    $('.side-navigation-bags').fadeIn();
  });
  $('.submenu-close-bags').click(function() {
    $('.side-navigation-bags').fadeOut();
  });
  //stationery
  $('.stationery-menu').click(function() {
    $('.side-navigation-stationery').fadeIn();
  });
  $('.submenu-close-stationery').click(function() {
    $('.side-navigation-stationery').fadeOut();
  });
  // home linen
  $('.home-linen-menu').click(function() {
    $('.side-navigation-home-linen').fadeIn();
  });
  $('.submenu-close-home-linen').click(function() {
    $('.side-navigation-home-linen').fadeOut();
  });
  // artEfacts
  $('.artEfacts-menu').click(function() {
    $('.side-navigation-artEfacts').fadeIn();
  });
  $('.submenu-close-artEfacts').click(function() {
    $('.side-navigation-artEfacts').fadeOut();
  });
  // paintings
  $('.paintings-menu').click(function() {
    $('.side-navigation-paintings').fadeIn();
  });
  $('.submenu-close-paintings').click(function() {
    $('.side-navigation-paintings').fadeOut();
  });
  //decoratives
  $('.decoratives-menu').click(function() {
    $('.side-navigation-decoratives').fadeIn();
  });
  $('.submenu-close-decoratives').click(function() {
    $('.side-navigation-decoratives').fadeOut();
  });


  // categories-link
  $('.Western').click(function() {
    $('.categories-title').text('Western-collection');
    $('.categories-link a.Western').css('opacity','1.0');
    $('.categories-link a.Eastern').css('opacity','0.8');
    $('.categories-link a.Rest').css('opacity','0.8');

        $('#Eastern').hide();
        $('#Rest').hide();
    $('#Western').slideDown();
  });

  $('.Eastern').click(function() {
    $('.categories-title').text('Eastern-collection');
    $('.categories-link a.Eastern').css('opacity','1.0');
    $('.categories-link a.Western').css('opacity','0.8');
    $('.categories-link a.Rest').css('opacity','0.8');
    $('#Western').hide();
    $('#Rest').hide();
    $('#Eastern').slideDown();

  });

  $('.Rest').click(function() {
    $('.categories-title').text('Rest-collection');
    $('.categories-link a.Rest').css('opacity','1.0');
    $('.categories-link a.Eastern').css('opacity','0.8');
    $('.categories-link a.Western').css('opacity','0.8');
    $('#Western').hide();
    $('#Eastern').hide();

    $('#Rest').slideDown();
  });



  $('.categories-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 1000,
    autoplayHoverPause: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      641: {
        items: 2
      },
      984: {
        items: 3
      },

      1292: {
        items: 4
      }
    }
  });

  // loading
  $('#loading').hide();




// scroll management
$(window).scroll(function() {
  if ($('.search-part').css('top') == '0px') {
    $('.search-part').animate({top: '-250px'});
  }
});


});
