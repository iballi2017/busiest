$(document).ready(function(){
    $('.carousel').carousel({
        interval: 2000
      })

      
      const myLazyLoad = new LazyLoad({
        elements_selector: ".lazy-image"
   });
   myLazyLoad();
   
})