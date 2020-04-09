//REST

const usuario = {
    nome: 'Diego',
    idade: 23,
    empresta: 'RocketSeat'
};

const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);

const array= [1,2,3,4];

const [a,b,...c] = array;

console.log(a,b,c);

function soma(a,b,c){
    return a+b + c;
}
function soma2(...params){
    return params.reduce((total,next) => total+next);
}


console.log(soma(1,3,4));


//SPREAD

const arr1 = [1,2,3];

const arr2 = [4,5,6];

const arr3 = [...arr1,...arr2];

console.log(arr3);


const usuario1 = {
    nome:'Diego',
    idade:23,

};

const usuario2 = {...usuario1, nome:'Gabriel'};

console.log(usuario2);