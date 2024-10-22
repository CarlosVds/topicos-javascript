// function clicou(){
//     let element = document.querySelector("#teste");
//     let elementUL = element.querySelector('ul');
    
//     let nweLi = document.createElement('li');
//     nweLi.innerText = 'Item adicionado';

//     elementUL.appendChild(nweLi);
// };

// function clicou(){
//     let elementID = document.querySelector('#teste');
//     let elementTag = elementID.querySelector('ul');

//     let newUL = document.createElement('ul');

//     for(let i = 1; i <= 5; i++){
//         let newLI = document.createElement('li');
//         newLI.innerHTML = i + "Novo UL";

//         newUL.append(newLI)
//     }

//     elementTag.after(newUL)
// }

// document.querySelector('.botao').addEventListener("click", clicou)

// function clicou(){
//     let input = document.querySelector('.testeInput');
//     let botao = document.querySelector('.botao')

//     input.setAttribute('placeholder', 'Digite sua senha')

//     if(input.getAttribute('type') === 'password'){
//         input.setAttribute('type', 'text')
//         botao.innerHTML = 'Ocutar senha' 
//     }else{
//         input.setAttribute('type', 'password')
//         botao.innerHTML = 'Mostrar senha'  
//     }

 
// }

// document.querySelector('.botao').addEventListener("click", clicou)

// function clicou(){
//     let div = document.querySelector('#teste')

//     if(div.classList.contains('item3')){
//         div.classList.remove('item3')
//         div.classList.add('item2')
//     }else if(div.classList.contains('item2')){
//         div.classList.remove('item2')
//         div.classList.add('item1')
//     }else{
//         div.classList.remove('item1')
//         div.classList.add('item3')
//     }
   
// }

// document.querySelector('input').addEventListener('keyup', pegou);


// function pegou(e){
//     console.log(e.code)
// }

let input = document.querySelector('input')
let lista = document.querySelector('ul') 

function inserir(e){
   
   let newLi = document.createElement('li')

   if(e.code === 'Enter'){
    newLi.innerHTML = input.value
    lista.appendChild(newLi);

    input.value = '' 
   }

}
    
input.addEventListener('keyup', inserir)