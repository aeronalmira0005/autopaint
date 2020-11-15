$(document).ready(function(){
  $(".left-car").attr("src","images/default_car.png");
  $(".right-car").attr("src","images/default_car.png");
});


$(document).on('change', '#leftCarColor', function(e) {
    var color = this.options[e.target.selectedIndex].text;

    if (color === "Blue"){
      $(".left-car").attr("src","images/blue_car.png");
    }

    else if (color === "Red"){
      $(".left-car").attr("src","images/red_car.png");
    }

    else if (color === "Green"){
      $(".left-car").attr("src","images/green_car.png");
    }

    else{
      $(".left-car").attr("src","images/default_car.png");
    }
});

$(document).on('change', '#rightCarColor', function(e) {
    var color = this.options[e.target.selectedIndex].text;

    if (color === "Blue"){
      $(".right-car").attr("src","images/blue_car.png");
    }

    else if (color === "Red"){
      $(".right-car").attr("src","images/red_car.png");
    }

    else if (color === "Green"){
      $(".right-car").attr("src","images/green_car.png");
    }

    else{
      $(".right-car").attr("src","images/default_car.png");
    }
});
