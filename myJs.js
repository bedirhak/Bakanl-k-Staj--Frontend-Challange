$(document).ready(function() { 
    
    //Mobile Nav Bar
    $(".header .nav-list").slideUp();
    $(".mobile-black").slideUp();
    
    $( ".mobile-line:first-child" ).css("transform-origin","bottom left");
    $( ".mobile-line:last-child" ).css("transform-origin","top left");
    
    
    var m = 0;
    
    
    
    
    $(".mobile-menu-icon").click(function(){
        
        
        if(m%2==0){
            $( ".mobile-line:first-child" ).css("transform","rotate(45deg)");
            $( ".mobile-line:nth-of-type(2)" ).css("opacity","0");
            $( ".mobile-line:last-child" ).css("transform","rotate(-45deg)");
            $(".header .nav-list").slideDown();
            $(".mobile-black").slideDown();

            m=1;
        }
        else{
            $( ".mobile-line:first-child" ).css("transform","rotate(0deg)").css("margin-bottom","10px");
            $( ".mobile-line:nth-of-type(2)" ).css("opacity","1");
            $( ".mobile-line:last-child" ).css("transform","rotate(0deg)").css("margin-bottom","10px");
            $(".header .nav-list").slideUp();
            $(".mobile-black").slideUp();

            m=0;
        }
    });


});