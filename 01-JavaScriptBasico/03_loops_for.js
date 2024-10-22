// let tabuada = 9

// for(let i = 0; i <= 10; i++){
//     console.log(tabuada + 'X' +  (i) + '='+ (tabuada * i))
// }

let lista = [
    {nome:'Carlos'}, 
    {nome:'Marcella'},
    {nome:'Enzo'}
];

// for(let i = 0; i < lista.length; i++){
//     console.log(lista[i][1].nome)
// }

for(let i in lista){
    console.log(`${i}: ${lista[i].nome.toLocaleUpperCase()}`)
}

// for(let valor of lista){
//     console.log(valor)
// }