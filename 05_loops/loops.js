let text = ''
const objeto = {
  nome :'fulano 02',
  numero : 10,
  dado : 'x',
  

}

for (i = 0; i < 5; i++) {
  text += "Número " + i + '\n';

}

console.log(text)



for(item in objeto){
    console.log('chave: ' + item + '\n'  );
}

for(item in objeto){
    console.log('Elemento do objeto: ' + objeto.nome + '\n'  );
}