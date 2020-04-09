// 3.1
const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(item => item + 10);

console.log(newArr);



// 3.2
// Dica: Utilize uma constante pra function
const usuarios = { nome: 'Diego', idade: 23 };

const mostraIdade = usuarios => usuarios.idade;
console.log(mostraIdade(usuarios));
// 3.3
// Dica: Utilize uma constante pra function
const nome = "Gabriel";
const idade = 23;

const mostraUsuario = (nome = "Diego", idade = 18) => ({
    nome,
    idade
});
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

const promise = () => new Promise((resolve, reject) => resolve());
