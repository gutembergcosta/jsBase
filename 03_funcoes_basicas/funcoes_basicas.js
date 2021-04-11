//Ternário

const numero = 2
const item = 'laranja'

function alerta(){ return 'diferente'}

let alertaFlecha = (x,y) => x + ' ' + y;

function funcao(valor) {
    
    let resposta;

    function funcaoAninhada(){

        if (valor == 'x') {
            resposta = "valor x";
        } else if (valor == 'y') {
          resposta = "valor y";
        } else {
          resposta = alerta();
        }
        return resposta
    };
    console.log('funcao clássica')
    return funcaoAninhada()
}

let funcaoFlecha = (valor) => {
    
  let resposta;

  let funcaoAninhada = () =>{

      if (valor == 'x') {
          resposta = "valor x";
      } else if (valor == 'y') {
        resposta = "valor y";
      } else {
        resposta = alertaFlecha('valor', 'diferente');
      }
      
      return resposta
  };

  console.log('funcaoFlecha')
  return funcaoAninhada()
}

console.log('result da arrow function: ' + funcaoFlecha(item));

console.log('result da função clássica: ' + funcao(item));

console.log('-----------------------')
  

