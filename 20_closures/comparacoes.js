//Ternário

const numero = 2
const expr = 'Laranjas'
const hora = new Date().getHours();

numero > 3 ? (
    console.log("maior")
) : (
    console.log("menor")
);

function funcao(hora) {
    let resposta;
    
    if (hora < 10) {
      resposta = "Good morning";
    } else if (hora < 20) {
      resposta = "Good day";
    } else {
      resposta = "Good evening";
    }
    return resposta
}

console.log(funcao(hora))

switch (expr) {
    case "Laranjas":
      console.log("As laranjas custam $0.59 o quilo.");
      break;
    case "Maçãs":
      console.log("Maçãs custam $0.32 o quilo.");
      break;
    case "Bananas":
      console.log("Bananas custam $0.48 o quilo.");
      break;
    case "Cerejas":
      console.log("Cerejas custam $3.00 o quilo.");
      break;
    case "Mangas":
    case "Mamões":
      console.log("Mangas e mamões custam $2.79 o quilo.");
      break;
    default:
      console.log(`Desculpe, estamos sem nenhuma ${expr}`);
}

console.log('-----------------------')
  

