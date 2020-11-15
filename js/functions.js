$(document).ready(function(){
  $(".left-car").attr("src","images/default_car.png")
  $(".right-car").attr("src","images/default_car.png")
});

$("#leftCarColor").change(function(){
  var leftCarColor = $(this).children("option:selected").val();
});
