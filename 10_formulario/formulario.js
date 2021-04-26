(function readyJS(win,doc){
	
	'use strict';
	let form =  doc.querySelector("#form")
	let input_texto = doc.querySelector("#input_texto")
	let textarea = doc.querySelector("#textArea")
	let ckbox_unico = doc.querySelector("#ckbox00")
	let seletor = doc.querySelector("#seletor")
	let enviar = doc.querySelector("#enviar")
	let arquivos = doc.querySelector("#arquivos")
	let galeria = doc.querySelector("#galeria")
	let radio = doc.getElementsByName("gender")

	console.dir(input_texto)
	console.dir(textarea)
	console.dir(ckbox_unico)
	console.log(ckbox_unico.value)
	console.dir(radio)

	function contador(e){
		console.log(e.target.textLength);
	}
	function contadorInput(e){
		console.log(this.value.length);
	}

	function validar(e){
		if(e.target.value == ''){
			alert('alerta')
		}
	}
	function getRadio(e){
		alert(e.target.value)
	}
	function getSelect(e){
		alert(e.target.value)
	}
	function enviaForm(e){
		e.preventDefault()
		alert('envia')
	}
	function getImagens(e){
		console.log('imgs')
		let arquivos = e.target.files;
		console.dir(arquivos)
		for(let i=0; i<arquivos.length; i++){
			console.log('aki')
			let reader = new FileReader();
			reader.onload = function(e){
				console.log('onload')
				let urlImg = e.target.result;
				console.log(urlImg)
				let newImg = doc.createElement('img');
				newImg.setAttribute('src', urlImg);
				newImg.style='width: 200px; margin: 7px'
				galeria.appendChild(newImg)
			}

			reader.readAsDataURL(arquivos[i])
			
		}
	}

	input_texto.style.backgroundColor = "#eee"

	input_texto.addEventListener('blur',validar,false);
	textarea.addEventListener('keyup',contador,false);
	input_texto.addEventListener('keyup',contadorInput,false);

	for(let i=0; i<radio.length; i++){
		radio[i].addEventListener('click', getRadio, false)
	}

	seletor.addEventListener('change',getSelect,false);
	arquivos.addEventListener('change',getImagens,false);
	enviar.addEventListener('click',enviaForm,false);
	




})(window, document)