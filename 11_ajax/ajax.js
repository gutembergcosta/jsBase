(function readyJS(win,doc){
	
	'use strict';

	let showJson = doc.querySelector("#showJson")
	let envia = doc.querySelector("#envia")
	let nome = doc.querySelector("#nome").value

	showJson.addEventListener('click',ajaxJson,false);
	envia.addEventListener('click',ajaxPHP,false);

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
	function ajaxPHP(e){

		alert('oi')
		e.preventDefault();

		let ajax = new XMLHttpRequest()
		//console.log(data)
		let data = 'nome='+nome
		ajax.open('POST','post.php')
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