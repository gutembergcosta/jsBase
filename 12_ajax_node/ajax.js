(function readyJS(win,doc){
	
	'use strict';

	let showJson = doc.querySelector("#showJson")
	let envia = doc.querySelector("#envia")
	let resposta = doc.querySelector("#resposta")
	let nome = doc.querySelector("#nome").value

	showJson.addEventListener('click',ajaxJson,false);
	envia.addEventListener('click',ajaxPHP,false);

	function ajaxJson(e){
		let ajax = new XMLHttpRequest()
		console.log(ajax)
		ajax.open('GET','http://localhost:3000/')
		ajax.send()
		ajax.onreadystatechange = function(){
			if(ajax.status === 200 && ajax.readyState === 4){

				console.log(ajax.responseText)
				
				

			}else{
				console.log(ajax.status)
			}
		}
	}
	function ajaxPHP(e){

		alert('oi node')
		e.preventDefault();

		let ajax = new XMLHttpRequest()
		//console.log(data)
		let data = 'nome='+nome
		ajax.open('POST','http://localhost:3000/retornoForm')
		ajax.setRequestHeader('content-type','application/x-www-form-urlencoded')		
		ajax.send(data)
		ajax.onreadystatechange = function(){
			if(ajax.status === 200 && ajax.readyState === 4){
				console.log('200');
				console.log(ajax.responseText)
			}
		}

		console.log(data)
		
		
		
	}

	




})(window, document)