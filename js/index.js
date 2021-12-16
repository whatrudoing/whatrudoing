window.addEventListener('scroll', function () {

});


var goup = document.getElementById("top");

window.addEventListener('scroll', function() {
  if (window.pageYOffset >= 400) {
    goup.style.display = "block";
  } else {
    goup.style.display = "none";
  }
})