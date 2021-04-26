(function readyJS(win,doc){
	
	'use strict';

	let showPHP = doc.querySelector("#showPHP")
	let envia = doc.querySelector("#envia")
	let nome = doc.querySelector("#nome").value

	showPHP.addEventListener('click',fetchPHP,false);
	envia.addEventListener('click',ajaxJson,false);

	function ajaxJson(e){
		let ajax = new XMLHttpRequest()
		console.log(ajax)
		ajax.open('GET','db.json')
		ajax.send()
		ajax.onreadystatechange = function(){
			if(ajax.status === 200 && ajax.readyState === 4){

				console.log('ok')
				
				let rs = JSON.parse(ajax.responseText)
				let carros = rs.carros;

				for(let i = 0; i< carros.length; i++ ){
					console.log(carros[i]['nome'])
				}

			}else{
				console.log(ajax.status)
			}
		}
	}
	function fetchPHP(e){
		alert('aki');

		let parametros ={
			method: 'POST',
			mode: 'cors',
			cache: 'default'
		}

		fetch('post.php',parametros)
		.then(function(response){
			alert('envio')
			console.log(response)
			if(response.ok){
				return response.json()
			}
		})
		.then(function(data){
			alert('a01')
			console.log(data)

			

		})
		
		
		
	}

	




})(window, document)