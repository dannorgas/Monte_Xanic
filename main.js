window.addEventListener("beforeunload", function() {
  document.body.classList.add("animate-out");
});



$(document).ready(function() {
  var posicion = 0;
  var anterior = null;

  var valores = ["cajita1", "cajita2", "cajita3", "cajita4"];

  $(".boton_arriba").click(function(e) {
    e.preventDefault();
    if (posicion === 0) {
      window.location.href = "./Monte_Xanix_y_Gran_Ricardo.html";
    }
    if (posicion > 0) {
      anterior = posicion;
      posicion -= 1;
    }
    $(valores[anterior]).hide();
    $(valores[posicion]).show();
  });
  $(".boton_arriba").click(function(e) {
    e.preventDefault();
    if (posicion === valores.length - 1) {
      window.location.href = "./Monte_Xanix_y_Gran_Ricardo.html";
    }
    if (posicion > 0) {
      anterior = posicion;
      posicion += 1;
    }
    $(valores[anterior]).hide();
    $(valores[posicion]).show();
  });

  var video = $("#youtube-video");
  console.log(video);
  $("#vercompleto").click(function(e) {
    e.preventDefault();
    var video = $("#youtube-video");

    video[0].src += "&autoplay=1";

    video[0].requestFullscreen();
  });

  $("#saltarvideo").click(function(e) {
    e.preventDefault();
    var video = $("#youtube-video");

    video[0].src = "";
    $("#contenidoPopUp").fadeOut("slow");

    $("#contenidoPopUp").hide();
  });

  $("#firstVid").click(function(e) {
    e.preventDefault();
    var video = $("#youtube-video");
    video[0].src = "https://www.youtube.com/embed/Hre6EXsxZxs?rel=0&controls=0&autoplay=1";
    $("#contenidoPopUp").fadeIn();
    $("#contenidoPopUp").show();
  });

    $("#secondVid").click(function(e) {
        e.preventDefault();
        var video = $("#youtube-video");
        video[0].src = "https://www.youtube.com/embed/2_HQOk93CmU?rel=0&controls=0&autoplay=1";
        $("#contenidoPopUp").fadeIn();

        $("#contenidoPopUp").show();
    });

    $("#thirdVid").click(function(e) {
        e.preventDefault();
        var video = $("#youtube-video");
        video[0].src = "https://www.youtube.com/embed/PmjtS5fkbbs?rel=0&controls=0&autoplay=1";
        $("#contenidoPopUp").fadeIn();

        $("#contenidoPopUp").show();
    });

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

let hold = "Puntos";
function hover(element, src) {
  element.setAttribute("src", "./img/pagina3/s" + src + ".png");
  $(document).ready(function() {
    if (hold !== src)
      $("#i" + hold).attr("src", "./img/pagina3/i" + hold + ".png");
    $("#dText").attr("src", "./img/pagina3/tex" + src + ".png");
    hold = src;
  });
}

function fullScreen() {

    var e = document.getElementById("video-wrapper");
    if (e.requestFullscreen) {
        e.requestFullscreen();
    } else if (e.webkitRequestFullscreen) {
        e.webkitRequestFullscreen();
    } else if (e.mozRequestFullScreen) {
        e.mozRequestFullScreen();
    } else if (e.msRequestFullscreen) {
        e.msRequestFullscreen();
    }
}


