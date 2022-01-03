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

// function drag_handler(event) {
//   //  ondrag =  드래그할때 동작 
//       console.log("Drag");
//       console.log(event.target.getAttribute("id"))
//       currentDraggingID = event.target.getAttribute("id") 
//   }
//   function dragover_handler(event) {
//     //ondragover = draggable 엘리먼트가 drop영역위에 올라가면 
//      console.log("dragOver");
//      event.preventDefault();
//   }
          
//   function drop_handler(event) {
//     //ondrop = draggable 엘리먼트를 drop영역위에 떨어트리면
//      console.log("droooop!");
     
//      document.getElementsByClassName("drag-box")[currentDraggingID].style.top=event.layerY+"px";
//      document.getElementsByClassName("drag-box")[currentDraggingID].style.left=event.layerX+"px";
//       event.preventDefault();
//   }

  // 5개
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