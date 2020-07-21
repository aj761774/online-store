
$('#related-carousel').owlCarousel({
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
    function imageChange(smallImage){
      var smallImageArray = document.getElementsByClassName('smallImg');
    for(let i=0;i<smallImageArray.length;i++){
      smallImageArray[i].style.opacity="0.5";
    }
      document.getElementById('bigImage').src = smallImage.src;
      smallImage.style.opacity='1';
    }
    let count=1;
    document.getElementById('increaseProductcount').addEventListener('click',function(){
      count+=1;
      document.getElementById('count').textContent=count;
    });
    document.getElementById('decreaseProductcount').addEventListener('click',function(){
      if (count>0){
        count-=1;
      document.getElementById('count').textContent=count;
    }
    });