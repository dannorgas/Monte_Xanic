$(document).ready(function() {
  $("#imagen_categoria1")
    .on("mouseover", function(event) {
      $("#imagen_detalle1").css("display", "flex");
      $("#imagen_detalle1").css("justify-content", "center");
    })
    .on("mouseout", function(event) {
      $("#imagen_detalle1").hide();
    });
  $("#imagen_categoria2")
    .on("mouseover", function(event) {
      $("#imagen_detalle2").css("display", "flex");
      $("#imagen_detalle2").css("justify-content", "center");
    })
    .on("mouseout", function(event) {
      $("#imagen_detalle2").hide();
    });
  $("#imagen_categoria3")
    .on("mouseover", function(event) {
      $("#imagen_detalle3").css("display", "flex");
      $("#imagen_detalle3").css("justify-content", "center");
    })
    .on("mouseout", function(event) {
      $("#imagen_detalle3").hide();
    });
  $("#imagen_categoria4")
    .on("mouseover", function(event) {
      $("#imagen_detalle4").css("display", "flex");
      $("#imagen_detalle4").css("justify-content", "center");
    })
    .on("mouseout", function(event) {
      $("#imagen_detalle4").hide();
    });
  $("#imagen_categoria5")
    .on("mouseover", function(event) {
      $("#imagen_detalle5").css("display", "flex");
      $("#imagen_detalle5").css("justify-content", "center");
    })
    .on("mouseout", function(event) {
      $("#imagen_detalle5").hide();
    });


});

let hold = 'Puntos';
function hover(element, src)
{

  element.setAttribute('src', './img/pagina3/s'+src+'.png');
  $(document).ready(function ()
  {
    if (hold !== src) $("#i"+hold).attr('src', './img/pagina3/i'+hold+'.png');
    $("#dText").attr('src', './img/pagina3/tex'+src+'.png');
    hold = src;
  });


}

