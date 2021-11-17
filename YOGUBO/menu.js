var menu = document.getElementById('bars');
var close = document.getElementById('close');
var nav = document.querySelector('.hamburguer');
var hamburguer = document.querySelector('.mobile');



hamburguer.addEventListener('click', abrir);
close.addEventListener('click', cerrar);


function abrir(){
nav.style.display="block";
close.style.display="block";
}

function cerrar(){
	nav.style.display="none";
close.style.display="none";
}


