this.usuario = 'fulano';
console.log(window)

const funcao = x =>  x + 10;

const objetoFormal = new Object();

objetoFormal.nome = 'fulano'
objetoFormal.numero = 10

const objetoLiteral = {
  nome :'fulano 02',
  numero : 10,
  retorno : funcao(10),
  matriz : ['elemento 01', 'elemento 02'],
  obj : {
    nome : 'fulano 03',
    numero : 20,
    retorno : funcao(20)
  },
  usarobj : function(item){
    return 'funçao: ' + item + ' | nome: ' +this.nome + ' | elemento: ' + this.matriz[0]; 
  }

}

console.log(objetoLiteral.nome)
console.log(objetoLiteral.matriz[0])
console.log(objetoLiteral.obj["nome"])
console.log(objetoLiteral.usarobj('funcao'))
console.log(objetoLiteral.usarthis(1,2))
console.log(objetoLiteral.usarthis02(3,2))