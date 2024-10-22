//https://jsonplaceholder.typicode.com/posts

async function exibePost(){
    let postArea = document.querySelector('.posts');
    postArea.innerHTML = 'Carregando...';

    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();

    if(json.length > 0){
        postArea.innerHTML = ''; 

        for(let i in json){
            let postHTML = `<div><h1>${json[i].title}</h1>${json[i].body}</div><hr>`;
            postArea.innerHTML += postHTML;
        }
    }else{
        postArea.innerHTML = 'Nenhum post para exibir';
    }
} 

async function addNewPost(title, body) {
    
    await fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method:'POST',

            hearders:{
                'Content-Type':'application/json'
            },

            body:JSON.stringify({
                title:title,
                body:body,
                userId: 2
            })

        }

    );

    document.querySelector('#input').value = '';
    document.querySelector('#areaTexto').value = '';

    exibePost();
}

document.querySelector('#botao').addEventListener('click', () => {
    let title = document.querySelector('#input').value;
    let body = document.querySelector('#areaTexto').value;

    if(title && body){
        addNewPost(title, body);
    }else{
        alert('Preencha todos os campos.')
    }
})


exibePost();