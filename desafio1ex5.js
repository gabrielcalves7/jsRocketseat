const array = [1,2,3,4,5,6,];


const [x,...y] = array;

console.log(x);
console.log(y);


function soma(...x){
    return x.reduce((total,next) => total + next);
}

console.log(soma(1,2,3,4,5,6));


const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
};

var usuario2 = {...usuario, nome: 'Gabriel'};

var usuario3 = {...usuario, cidade:'Sao Jose dos Campos'};

console.log(usuario2,usuario3);