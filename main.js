window.addEventListener("beforeunload", function() {
  document.body.classList.add("animate-out");
});



$(document).ready(function() {

  $("#vercompleto").click(function(e) {
    e.preventDefault();
      var video = $("#youtube-video");
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


