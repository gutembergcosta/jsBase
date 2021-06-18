let text = ''
const matriz01 = [{
  nome :'fulano 02',
  numero : 10,
  dado : 'x',
  
}]

const matriz02 = ['x','y','z','a'];
const matriz03 = [1,2,3,4,5];
//const matriz_concatenado = matriz02.concat(matriz03);
const matriz_concatenado = [...matriz02, ...matriz03];

const every_x = matriz_concatenado.every(
  function verifica(elem, index, objeto){
    return (typeof elem == "number")
  }
)

const filter_x = matriz_concatenado.filter(
  function filtrar(elem, index, objeto){
    return (elem > 3)
  }
)
const filtrar_somente_strings = matriz_concatenado.filter(
  function filtrar(elem, index, objeto){
    return (typeof elem == "string")
  }
)
let data_each  = '';
const matriz_each = matriz_concatenado.forEach(
  function filtrar(elem, index, objeto){
    if(index >= 2){
      data_each += 'index: ' +index+ ' | elem: ' +elem + '\n'
    }
  }
)

let matriz_mapFinal = []
const matriz_map = matriz_concatenado.map(
  function filtrar(elem, index, objeto){
    if(typeof elem == "number"){
      matriz_mapFinal.push(elem * 2) 
    }else{
      matriz_mapFinal.push(elem) 
    }
  }
)

const reduce_x = matriz03.reduce(
  function filtrar(v1,v2, index, objeto){
    return v1+v2;
  }
)




console.log('index específico: ' + matriz01[0].nome)
console.log('size: '  + matriz01.length)
console.log('concatenado: ' + matriz_concatenado)
console.log('indexOf_x: ' + matriz_concatenado.indexOf('y'))
console.log('indexOf_y: ' + matriz_concatenado.indexOf(3))
console.log('join_x: ' + matriz_concatenado.join(' - '))
console.log('pop_x : ' + matriz03.pop() )
console.log('reverse : ' + ['x','y','z','a'].reverse() )
console.log('shift : ' + ['x','y','z','a'].shift() )
console.log('slice : ' + ['x','y','z','a'].slice(3,6) )
console.log('sort : ' + ['x','y','z','a'].sort() )
console.log('splice 01 : ' + ['x','y','z','a'].splice(2,2) )
console.log('splice 02 : ' + ['x','y','z','a'].splice(2,2,'a','s') )


console.log('every: ' + every_x)
console.log('filtrar números: ' + filter_x)
console.log('filtrar string: ' + filtrar_somente_strings)
console.log('matriz_each: ' + data_each )
console.log('matriz_map: ' + matriz_mapFinal)
console.log('reduce_x: ' + reduce_x)

