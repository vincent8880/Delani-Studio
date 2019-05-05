function checkPass(){
  var name=document.getElementById("name");
  alert(name + "thank you");
}
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
      
  function checkPass(){
    var name=document.for.name;
    var email=document.for.email;
    var message=document.for.textarea;
    var name_length=name.value.length;
    var email_length=email.value.length;
    var message_length=message.value.length;
    if(email_length !=0 && name_length !=0 && message_length != 0){
           alert( "We have received your message.Thank you for reaching out to us");
  }
}