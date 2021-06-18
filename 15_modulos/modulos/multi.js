function multi(x,y){
    return x * y
}

function porcentagem(valor,total){
    return multi(valor,100)/total + '%'
}

export {multi,porcentagem}