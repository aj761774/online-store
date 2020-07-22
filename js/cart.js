
$('#recommanded-carousel').owlCarousel({
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
      560: {
        items: 2
      },
      840: {
        items: 3
      },
  
      1120: {
        items: 4
      }
    }
  });
  const addedItems = document.getElementsByClassName('productcount');
  for(let i=0;i<addedItems.length;i++){
      let count=1;
      addedItems[i].lastElementChild.addEventListener('click',()=>{
          count+=1;
          addedItems[i].lastElementChild.previousElementSibling.textContent = count;
      });
      count = 1;
      addedItems[i].firstElementChild.addEventListener('click',()=>{
        if (count>0){
        count-=1;
        addedItems[i].firstElementChild.nextElementSibling.textContent = count;
        }
    });
  }
