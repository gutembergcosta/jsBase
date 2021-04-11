(function readyJS(win,doc){
	
	'use strict';

	let getID = doc.getElementById("teste");
	console.dir(getID);
	getID.className = 'add Classe'
	getID.style.color = 'navy'
	getID.style.backgroundColor = '#eee'

	//console.dir(doc.getElementByName("teste"));
	console.dir(doc.getElementsByClassName("teste"));
	console.dir(doc.getElementsByTagName("img"));
	console.dir(doc.querySelector("#teste"));

	let botoes = doc.querySelectorAll(".btn");
	console.dir(doc.querySelectorAll(".btn"));

	for(let i=0; i<botoes.length; i++){
		botoes[i].addEventListener('click', function(){
			alert('oi')
			this.style.color = 'white';
			this.style.backgroundColor = this.getAttribute('data-cor');
		})
	}




})(window, document)