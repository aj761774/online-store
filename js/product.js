// header
function sideMenuMangage() {
  if ($('.side-navigation').css('left') == '0px') {
    $('.side-navigation').animate({
      left: '-400px'
    });
  }
  if ($('.register-login').css('display') == 'block') {
    $('.register-login').slideUp();
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
};

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





// product page js start

$('.applyFilter').click(function(){
  const checkboxValues=[];
  const checkedCheckboxes = $('input[type="checkbox"]:checked');
  if(checkedCheckboxes.length>0){
    for(let i=0;i<checkedCheckboxes.length;i++){
      let value = $(checkedCheckboxes[i]).val();
      checkboxValues.push(value);
     }
   $('.product-grid').fadeOut();
   for(let i=0;i<checkboxValues.length;i++){
   $('.' + checkboxValues[i]).fadeIn();
    }
  }
else{
$('.product-grid').fadeIn();
}
});


// product page js end
// scroll management
$(window).scroll(function() {
  if ($('.search-part').css('top') == '0px') {
    $('.search-part').animate({top: '-250px'});
  }
});
