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

