(function readyJS(win,doc){
	
	'use strict';

	let main = doc.querySelector("#main");
	let botao = doc.querySelector("#botao");
	let botoes = doc.querySelectorAll(".btn");
	console.dir(botao);
	console.dir(botoes);

	botao.addEventListener("click", alertar, false);

	function alertar(e){
		console.log(e)
		console.log(e.target)
		alert('oi');
	}

	function optEventos(e){

		alert(e.target.id)

		if(e.target.id === "novo-botao"){
			alertar(e)
		}else if(e.target.id === "addBtn"){
			addBtn()
		}
	}

	function mudarCor(e){
		alert('oi')
		if(this.hasAttribute("data-cor")){
			this.style.backgroundColor = e.target.dataset.cor;
		}
	}

	for(let i=0; i<botoes.length; i++){
		botoes[i].addEventListener('click', mudarCor, false)
	}

	function addBtn(e){
		const novoBotao = doc.createElement("button")
		novoBotao.id = "novo-botao"
		novoBotao.innerHTML = "novo-botao"
		main.appendChild(novoBotao)
	}

	main.addEventListener("click", optEventos, false);

})(window, document)