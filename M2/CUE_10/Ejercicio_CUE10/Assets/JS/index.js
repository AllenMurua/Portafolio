$(document).ready(function(){
    $(".text1").css("background-color","purple");
    $(".text2").css({"background-color":"orange", "width":"400px"});
    $(".text1").mouseenter(function(){
      $(".text2").hide();
    });
    $(".text1").mouseleave(function(){
      $(".text2").show();
    });
    
    $(".caja2").click(function(){
      $("img").css({"width": "100%"})
    })
    $(".caja2").mouseleave(function(){
      $("img").css({"width":"50%"});
    });
    $(".text3").dblclick(function(){
      $(".text3").css("font-size","40px")  
    });
    // $(".text3").mouseleave(function(){
    //   $(".text3").css("font-size","10px")  
    // });
});

