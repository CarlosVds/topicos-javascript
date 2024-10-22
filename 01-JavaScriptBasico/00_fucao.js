// function somar(a, b){
//     return a + b
// }

// let result = somar(2, 5)

// console.log(result)

// function nomeSobrenome(n1, n2){
//     return `${n1} ${n2}`
// }

// let nomeSobre = nomeSobrenome('Carlos', 'Santos');

// console.log(nomeSobre)

function maiorDeIdade(age){
    if (age >= 18){
        return true;
    }else{
        return false
    }
};

// let verifica = maiorDeIdade(11);

// console.log(verifica)

// if(verifica ){
//     console.log('É de maior')
// }else{
//     console.log('É de menor')
// }

// function porcentagem(x, y){
//     return (y / x) * 100
// }

// let x = 70;
// let y = 35;

// let pct = porcentagem(x, y)

// console.log(`${pct.toFixed(2)}% de ${x} é = ${y}`)

// function calcularImovel(metragem, quarto){

//      let m2 = 3000;
//      let preco = 0;

//     switch(quarto){
//         case 1: 
//             preco = metragem * m2;
//             break;
//         case 2: 
//             preco = metragem * (m2 * 1.2);
//             break;       
//         case 3: 
//             preco = metragem * (m2 * 1.5);
//             break;
//     }

//     return preco; 
// }

// let metragem = 123;
// let quarto = 2;
// let preco = calcularImovel(metragem, quarto)
// console.log(`A casa custa R$ ${preco}`)

let nome = 'Enzo';
let senhaUsuario = 123

const validar = (usuario, senha) => {
    if(nome === usuario && senha === senhaUsuario){
        console.log('Autorizado')
    }else{
        console.log('Acesso negado')
    }
}

validar('Enzo', 123);