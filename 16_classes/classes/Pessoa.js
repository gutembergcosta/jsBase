import Trabalho from './Trabalho.js'

export default class Pessoa extends Trabalho{

    constructor(){
        super();
        this.nome = 'fulano';
        this.sobrenome ='de tal '
    }

    getNome(){
        return this.nome
    }

    getSobreNome(){
        return this.sobrenome
    }

    getNomeCompleto(){
        return this.getNome() + ' ' + this.getSobreNome()
    }

    setDadosPessoa(idade,cidade){
        this.idade = idade;
        this.cidade = cidade;
    }

    getDataTrabalho(){
        return 'O ' + this.getNomeCompleto() + ' Trabalha em: ' + super.getEmpresa()
    }

}