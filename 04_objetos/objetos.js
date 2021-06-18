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

console.log('01 - nome : ' + objetoLiteral.nome)
console.log('02 - matriz[0] : ' + objetoLiteral.matriz[0])
console.log('03 - obj["nome"] : ' + objetoLiteral.obj["nome"])
console.log('04 - usarobj(fulano) : ' + objetoLiteral.usarobj('fulano'))