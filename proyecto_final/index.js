function onReady(callback) {
  var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 2200);
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function() {
  setVisible('body', true);
  setVisible('#loading', false);
});


var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
var img5 = document.getElementById('img5');
var img6 = document.getElementById('img6');
var gallery = document.getElementById('gallery')
var gallery2 = document.getElementById('gallery2')
var gallery3 = document.getElementById('gallery3')
var gallery4 = document.getElementById('gallery4')
var gallery5 = document.getElementById('gallery5')
var gallery6 = document.getElementById('gallery6')

img1.onclick=function(){
     gallery.style.display="block";
}

img2.onclick=function(){
     gallery2.style.display="block";
}

img3.onclick=function(){
     gallery3.style.display="block";
}

img4.onclick=function(){
     gallery4.style.display="block";
}

img5.onclick=function(){
     gallery5.style.display="block";
}

img6.onclick=function(){
     gallery6.style.display="block";
}

/**/
gallery.onclick=function(){
   gallery.style.display="none";
}

gallery2.onclick=function(){
   gallery2.style.display="none";
}

gallery3.onclick=function(){
   gallery3.style.display="none";
}

gallery4.onclick=function(){
   gallery4.style.display="none";
}

gallery5.onclick=function(){
   gallery5.style.display="none";
}

gallery6.onclick=function(){
   gallery6.style.display="none";
}
