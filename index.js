var img1 = document.getElementById('i1');
var img2 = document.getElementById('i2');
var img3 = document.getElementById('i3');

var titulo = document.getElementById('t1');
var titulo2 = document.getElementById('t2');
var titulo3 = document.getElementById('t3');

img1.onmouseover = function(){
	titulo.style.display="block";
};

img1.onmouseout = function(){
	titulo.style.display="none";
};

img2.onmouseover = function(){
	titulo2.style.display="block";
};

img2.onmouseout = function(){
	titulo2.style.display="none";
};

img3.onmouseover = function(){
	titulo3.style.display="block";
};

img3.onmouseout = function(){
	titulo3.style.display="none";
};
