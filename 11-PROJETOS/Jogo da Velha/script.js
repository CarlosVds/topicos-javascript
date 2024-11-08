//init data
let frame = {
    a1:'',a2:'',a3:'',
    b1:'',b2:'',b3:'',
    c1:'',c2:'',c3:''
}

let player = '';
let warning = ''; 
let playing = false;//know if the game is running or no



//Event
document.querySelector('.reset').addEventListener('click', reset); //Buttom to clear game
document.querySelectorAll('.item').forEach((item) =>{
    item.addEventListener('click', itemClick)
});

reset();

//Function
function reset(){
    warning = '';

    let random = Math.floor(Math.random() * 2);//Choose a player random
    player = (random === 0) ? 'x' : 'o';

    for(let i in frame){ // Zeroing the frame object
        frame[i] = '';
    }

    playing = true;

    renderFrame();
    renderInfo();
};

function renderFrame(){
    for(let i in frame){
        let item = document.querySelector(`div[data-item=${i}]`);
        item.innerHTML = frame[i];
    };

    checkGame();
};

function renderInfo(){
    document.querySelector('.vez').innerHTML = player;
    document.querySelector('.resultado').innerHTML = warning;
};

function itemClick(event){
    let item = event.target.getAttribute('data-item');
    if(playing && frame[item] === ''){
        frame[item] = player;
        renderFrame();
        togglePlayer();
    }

    
};

function togglePlayer(){
    player = (player === 'x') ? 'o' : 'x';
    renderInfo()
}

function checkGame(){
    if(checkWinnerFor('x')){
        warning = 'O x venceu';
        playing = false;
    }else if(checkWinnerFor('o')){
        warning = 'O o venceu';
        playing = false;
    }else if(isFull()){
        warning = 'Deu impate';
        playing = false;
    }
};

function checkWinnerFor(player){
    let pos = [
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c3,c3',
        
        'a1,b1,c1',
        'a2,b2,c2',
        'a3,b3,c3',

        'a1,b2,c3',
        'a3,b2,c1'
    ];

    for(let i in pos){
        let pArray = pos[i].split(',');
        let hasWon = pArray.every(option => frame[option] === player);

        if(hasWon){
            return true;
        }
    };

    return false;
};

function isFull(){
    for(let i in frame){
        if(frame[i] === ''){
            return false;
        }
    };

    return true;
};