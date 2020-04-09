const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

   
const newArr = usuarios.map(usuario => usuario.idade);

console.log(newArr);

const filtrarIdade = usuarios.filter(
    usuario => usuario.empresa === 'Rocketseat' && usuario.idade >= 18
);

console.log(filtrarIdade);


const encontrarEmpresa = usuarios.find(
    usuario => usuario.empresa === 'Google'
);


const multiplicaIdade = usuarios
    .map(usuario =>({...usuario, idade: usuario.idade * 2}))
    .filter(usuario => usuario.idade <= 50
    );

console.log(multiplicaIdade);