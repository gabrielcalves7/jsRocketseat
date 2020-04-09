class user{
    constructor(email,pass){
        this.email = email;
        this.pass = pass;
    }

    isAdmin (){
        return this.admin === true;
    }
}

class adm extends user{
    constructor(email,pass){
        this.email = email;
        this.pass = pass;
        this.admin = true;
    }
}


const User1 = new user('email@teste.com', 'senha123');
const Adm1 = new adm('email@teste.com', 'senha123');

console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true