document.body.addEventListener('keyup', (e) =>{
    tocaAi(e.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', () =>{
    let songArray = document.querySelector('#input').value;
    playComposition(songArray.split(''));
})

function tocaAi(som){
    let audioEl = document.querySelector(`#s_${som}`);
    let botaoTocado = document.querySelector(`div[data-key="${som}"]`)

    if(audioEl){
        audioEl.currentTime = 0
        audioEl.play();
    };

    if(botaoTocado){
        botaoTocado.classList.add('active');

        setTimeout(() =>{
            botaoTocado.classList.remove('active');
        },300);
    }
};


function playComposition(songArray){
    let wait = 0;

    for(let songItem of songArray){
        setTimeout(()=>{
            tocaAi(`key${songItem}`)
        }, wait)
        
        wait += 250;
    }
}