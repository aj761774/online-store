'use strict';
$('document').ready(function() {
// side navigations
const sideNavigationItems = document.querySelectorAll('.side-navigation .navigation-item');
for(let i = 0; i < sideNavigationItems.length; i++){
  if(sideNavigationItems[i].hasAttribute('id')){
  sideNavigationItems[i].addEventListener('click',()=>{
         const ID = sideNavigationItems[i].getAttribute('id');
         $('.side-navigation-' + ID).fadeIn();
         
         $('.submenu-close-' + ID).click(function() {
             $('.side-navigation-' + ID).fadeOut();
            
        });

        const subItems =  document.querySelectorAll('.side-navigation-' + ID + ' .navigation-item');
        for(let j = 0;j < subItems.length;j++){
          subItems[j].addEventListener('click',()=>{
            const subItemId = subItems[j].getAttribute('id');
            $('.side-navigation-' + subItemId).fadeIn();
            $('.submenu-close-' + subItemId).click(function() {
             $('.side-navigation-' + subItemId).fadeOut();
             });
          });
        }
  });
}
else{
  continue;
}
}
  // funtion
  function sideMenuMangage() {
    if ($('.side-navigation').css('left') == '0px') {
         $('.side-navigation').animate({
           left: '-400px'
         });
         $('#outsideAreaOfSideNavigation').animate({opacity:'1'});
        }
        for(let i = 0; i < sideNavigationItems.length; i++){
          if(sideNavigationItems[i].hasAttribute('id')){
            const ID = sideNavigationItems[i].getAttribute('id');
            if ($('.side-navigation-' + ID).css('display') == 'block') {
               $('.side-navigation-' + ID).fadeOut();
              }
              const subItems =  document.querySelectorAll('.side-navigation-' + ID + ' .navigation-item');
              for(let j = 0;j < subItems.length;j++){
                  const subItemId = subItems[j].getAttribute('id');
                  if ($('.side-navigation-' + subItemId).css('display') == 'block') {
                    $('.side-navigation-' + subItemId).fadeOut();
                   }  
    
              }
          }
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

    $('.input-email').click(()=>{
      
     $('.email').animate({top:'0.5rem'},80);

    });
    $('.input-mobile').click(()=>{
      $('.mobile').animate({top:'0.5rem'},80);
  });
  $('.input-password').click(()=>{
    $('.password').animate({top:'0.5rem'},80);
});
$('.input-confirm-password').click(()=>{
  $('.confirm-password').animate({top:'0.5rem'},80);
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
    $('#outsideAreaOfSideNavigation').animate({opacity:'0.5'});
  });
  $('.close-navigation').click(function() {
    $('.side-navigation').animate({
      left: '-400px'
    });
    $('#outsideAreaOfSideNavigation').animate({opacity:'1'});
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


$('#outsideAreaOfSideNavigation').click(()=>{
  sideMenuMangage();
});


});
