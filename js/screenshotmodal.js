//screenshot 1
var modal = document.getElementById("screenshotModal1");


var img = document.getElementById("screenshot1");
var modalImg = document.getElementById("modelimg01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

//screenshot 2

var modal = document.getElementById("screenshotModal2");


var img = document.getElementById("screenshot2");
var modalImg = document.getElementById("modelimg02");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}


//screenshot 3

var modal = document.getElementById("screenshotModal3");


var img = document.getElementById("screenshot3");
var modalImg = document.getElementById("modelimg03");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
