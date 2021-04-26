(function readyJS(win,doc){
	
	'use strict';

	let showJson = doc.querySelector("#showJson")
	let form = doc.querySelector("#form")
	let btn = doc.querySelector("#btn")
	let result = doc.querySelector("#result")
	let progress = doc.querySelector("#progress")
	
	function sendform(e){
		alert('foi')
		e.preventDefault();

		let ajax = new XMLHttpRequest()
		let data = new FormData(form)
		console.dir(data)
		ajax.open('POST','upload.php')
		
		ajax.onloadstart = function(e){
			btn.value = 'carregando'
		};
		ajax.upload.onprogress = function(e){

			if(e.lengthComputable){

				progress.style.width=(e.loaded*100/e.total)+'%'
				console.log(e.loaded*100/e.total)
			}
			
			console.log(e.lengthComputable)

			//result.innerHTML('')
		};
		ajax.onloadend= function(){
			console.log(e)
			btn.value = 'carregado'
		};
		ajax.send(data)
	}

	form.addEventListener('submit', sendform, false)

	




})(window, document)