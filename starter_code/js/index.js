$(document).ready(function(){
   // Get it ready

   $(".readmore a").click(function(event){
       $("#show-this-on-click").toggle();
          event.preventDefault();
   });;

   $(".learnmore").click(function(event){
       $("#learnmoretext").toggle(); 
          event.preventDefault();
   });;
   });



