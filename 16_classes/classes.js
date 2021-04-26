import Pessoa from './classes/Pessoa.js';
import pessoa from './classes/Pessoa.js';

let individuo = new Pessoa();

individuo.setDadosPessoa(38,'vespasiano')

let info = individuo.getDataTrabalho()

console.log('info: ' + info)