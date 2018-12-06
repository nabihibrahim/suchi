$(document).ready(function(){
   // toggler btn
    $('.navbar-toggler').click(function(){
       $('.navbar-toggler').toggleClass('change') 
    })
    
    //sticky navbar less padding
    $(window).scroll(function(){
      
        let position = $(this).scrollTop();
        
        if(position>= 718){
            $('.navbar').addClass('navbar-background');
            $('.navbar').addClass('fixed-top');
        } else{
            $('.navbar').removeClass('navbar-background');
            $('.navbar').removeClass('fixed-top');
        }
        
    })
    
    // smooth scroll
    $('a[href^="#"]').click(function(){
        var the_id = $(this).attr("href");
        if (the_id === '#') {
            return;
        }
        $('html, body').animate({
            scrollTop:$(the_id).offset().top - 25
        }, 2000);
        return false;
    });
    
    //back to top
    $(window).scroll(function(){
      
        let position = $(this).scrollTop();
        
        if(position>= 718){
            $('#back-to-top').addClass('scrollTop');
        } else{
            $('#back-to-top').removeClass('scrollTop');

        }
        
    })
    
 
    // ripples
    $("#header, .info").ripples({
          resolution: 512,
          dropRadius: 20,
          perturbance: 0.4,
      
    });
    // magnific popup
    $('.parent-container').magnificPopup({
          delegate: 'a', // child items selector, by clicking on it popup will open
          type: 'image',
          gallery: {
              enabled:true
          }
          // other options
    });
    
});