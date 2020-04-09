const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco:{
        cidade: 'Rio do Sul',
        estado: 'SC',
    },
};

function mostraNome({nome, idade}){
    console.log(nome,idade);
}

const {nome,idade, endereco: {cidade, estado}} = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);

mostraNome(usuario);