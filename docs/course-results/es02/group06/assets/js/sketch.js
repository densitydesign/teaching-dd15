
 window.onload = function () {
     var objDemo = document.getElementById("demo");
     var objSmallBox = document.getElementById("small-box");
     var objMark = document.getElementById("mark");
     var objFloatBox = document.getElementById("float-box");
     var objBigBox = document.getElementById("big-box");
     var objBigBoxImage = objBigBox.getElementsByTagName("img")[0];
     //鼠标一如事件
     objMark.onmouseover = function () {
         objFloatBox.style.display = "block"
         objBigBox.style.display = "block"
     }
     //鼠标移出事件
     objMark.onmouseout = function () {
         objFloatBox.style.display = "none"
         objBigBox.style.display = "none"
     }
     //鼠标移动事件
     var objFloatBox = objBigBox;
     objMark.onmousemove = function (ev) {
         var _event = ev || window.event;  //兼容多个浏览器的event参数模式
         var left = _event.clientX - objDemo.offsetLeft - objSmallBox.offsetLeft - objFloatBox.offsetWidth / 2;
         var top = _event.clientY - objDemo.offsetTop - objSmallBox.offsetTop - objFloatBox.offsetHeight / 2;
         if (left < 0) {
             left = 0;
         } else if (left > (objMark.offsetWidth - objFloatBox.offsetWidth)) {
             left = objMark.offsetWidth - objFloatBox.offsetWidth;
         }
         if (top < 0) {
             top = 0;
         } else if (top > (objMark.offsetHeight - objFloatBox.offsetHeight)) {
             top = objMark.offsetHeight - objFloatBox.offsetHeight;
         }
         objFloatBox.style.left = left + "px";
         objFloatBox.style.top = top + "px";
         var percentX = left / (objMark.offsetWidth - objFloatBox.offsetWidth);
         var percentY = top / (objMark.offsetHeight - objFloatBox.offsetHeight);
         objBigBoxImage.style.left = -percentX * (objBigBoxImage.offsetWidth - objBigBox.offsetWidth) + "3px";
         objBigBoxImage.style.top = -percentY * (objBigBoxImage.offsetHeight - objBigBox.offsetHeight) + "3px";
     }
 }









// function changeColor(){
//   background(random(255),random(255),100);
// }
