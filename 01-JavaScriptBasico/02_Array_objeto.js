// let objeto = {
//     nome:'Carlos',
//     sobreNome: 'Santos',
//     somar:(a, b)=>{
//         return a + b;
//     },
//     carro:[
//         {modelo:'Renault', cor: 'Verde'},
//         {modelo:'Fiat', cor:'Preto'}
//     ]
// }

// console.log(objeto.somar(4,5))
// let equacao = '*'

let fruts = ['Banana','Maçã','Abacate','Pêra'];

// console.log(`"Minha lista original": ${fruts}: qtd: ${fruts.length}`)
// console.log(equacao.repeat(40))

// fruts.push('Kiwi')

// console.log(`"Lista alterada": ${fruts}: qtd: ${fruts.length}`)
// console.log(equacao.repeat(40))

// let fruts2 = fruts.join('; ')

// console.log(`"Lista alterada": ${fruts2}: qtd: ${fruts2.length}`)
// console.log(equacao.repeat(40))

// let cars = [
//     {brand: 'Fiat', year:2022},
//     {brand: 'BMW', year:2018},
//     {brand: 'Ferrari', year:2020}
// ];

// cars.sort((a, b) => a.year - b.year);

// console.log(cars)

// let filterFruts = fruts.filter((item) =>{{
//     return item.length > 4;
// }});

// console.log(filterFruts)

// let ok = fruts.every((value)=> value.length > 3)

// if(ok){
//     console.log('Todos são maiores que três')
// }else{
//     console.log('Nem todos são maiores que três')
// }

fruts.push('Amora')

if(fruts.includes('Amora')){
    console.log('Tem amora sim!')
}else{
    console.log('Não tem amora...')
}