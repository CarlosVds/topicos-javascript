// let pessoa = {
//     nome: "Carlos",
//     sobreNome: "Santos",
//     idade: 100,
//     social:{
//         facebook: "CarlosVDs",
//         instagram:{
//             url:"@CarlosVds",
//             seguidores: 1000
//         }
//     },
   
// }

// let {nome, sobreNome, social:{instagram:{url}}} = pessoa;

// function pegarObjetos(){
//     return `${nome} ${sobreNome} (Siga em ${url})`
// }

// console.log(pegarObjetos(pessoa));
// console.log(nome, sobreNome, `(Siga em ${url})`);

let [,,nome,sobreNome ] = ["Carlos Santos", "Marcella", "Enzo","Carvalho"];

console.log(nome, sobreNome);

function criar(){ 
    return [1,2,3];
};

let [a,b,c] = criar();

console.log(b)