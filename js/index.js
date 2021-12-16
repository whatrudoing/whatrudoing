var headers = document.querySelectorAll(".header-list");
const container = document.querySelector(".container");

headers.forEach(function(header){
  container.addEventListener('scroll', function(){
    console.log(container.scrollTop)
    if (container.scrollTop >=0) {
      header.style.color = 'black'
    }
    if (container.scrollTop >=750) {
      header.style.color = '#ffff'
    }
    if (container.scrollTop >=1550) {
      header.style.color = 'black'
    }
  })
}) 