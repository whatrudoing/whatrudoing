var headers = document.querySelectorAll(".header-list");
const container = document.querySelector(".container");
var logo = document.querySelector(".header-logo");

headers.forEach(function(header){
  container.addEventListener('scroll', function(){
    console.log(container.scrollTop)
    if (container.scrollTop >=0) {
      header.style.color = 'black'
      logo.style.color = 'black'
    }
    if (container.scrollTop >=750) {
      header.style.color = '#ffff'
      logo.style.color = 'white'
    }
    if (container.scrollTop >=1550) {
      header.style.color = 'black'
      logo.style.color = 'black'
    }
  })
}) 