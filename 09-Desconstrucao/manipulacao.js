let pessoa = {
    nome: "Carlos",
    sobreNome: "Santos",
    idade: 100,
    social:{
        facebook: "CarlosVDs",
        instagram:{
            url:"@CarlosVds",
            seguidores: 1000
        }
    },
   
}

let {nome, sobreNome, social:{instagram:{url}}} = pessoa;

function pegarObjetos(){
    return `${nome} ${sobreNome} (Siga em ${url})`
}

console.log(pegarObjetos(pessoa));
console.log(nome, sobreNome, `(Siga em ${url})`);