$(document).ready(function() {
    $("#design").click(function() {
      $("#Our").show();
      $("#design").hide();
     
        $("#Our").click(function(){
          $("#design").show();
      $("#Our").hide();

        });

      });
      
    });
$(document).ready(function() {
 $("#dev").click(function() {
      $("#All").show();
      $("#dev").hide();
     
        $("#All").click(function(){
          $("#dev").show();
      $("#All").hide();

        });

      });
    });
      
    $(document).ready(function() {
      $("#product").click(function() {
           $("#and").show();
           $("#product").hide();
          
             $("#and").click(function(){
               $("#product").show();
           $("#and").hide();
     
             });
     
           });
         });
         $(document).ready(function() {
         $(".work").hover(
          function(){
            $(this).fadeTo(500, 0.5);
          },
          function(){
            $(this).fadeTo(500, 1);
          }
        );
      });