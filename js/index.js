var headers = document.querySelectorAll(".header-list");
const container = document.querySelector(".container");
var logo = document.querySelector(".header-logo");
var dragTargets = document.querySelectorAll(".drag-box");  // 5개의 div
var dragStartX, dragStartY; var objInitLeft, objInitTop;
var inDrag = false;

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


  dragTargets.forEach(function(dragTarget) {
    dragTarget.addEventListener('mousedown', function(e) {
      e.preventDefault();
      inDrag = true;
      objInitLeft = dragTarget.offsetLeft; objInitTop = dragTarget.offsetTop;
      dragStartX = e.pageX; dragStartY = e.pageY;
    });

    dragTarget.addEventListener('mousemove', function(e) {
      e.preventDefault();
      if (!inDrag) {return;}
      dragTarget.style.left = (objInitLeft + e.pageX-dragStartX) + "px";
      dragTarget.style.top = (objInitTop + e.pageY-dragStartY) + "px";
    });

    dragTarget.addEventListener('mouseup', function(e) {
      e.preventDefault();
      inDrag = false;
    });

  });