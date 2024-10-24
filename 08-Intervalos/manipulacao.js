// function showTime(){
//     let d = new Date();

//     let h = d.getHours();
//     let m = d.getMinutes();
//     let s = d.getSeconds();

//     let hrs = h+":"+m+":"+s;

//     document.querySelector('.manipulacao').innerHTML = hrs
// }

// let timer;

// function comecar(){
//     timer = setInterval(showTime, 1000);
// }

// function parar(){
//     clearInterval(timer)
// }

let time;
let frase;


function showTime(){
    let d = new Date();

    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    hrs = h+":"+m+":"+(s < 10 ? '0' + s : s); 

    document.querySelector('.texto').innerHTML = "Hora certa :" 
    document.querySelector('.time').innerHTML = hrs;
}

function comecar(){
    time = setInterval(showTime, 1000)
    frase = setTimeout(showTime,1000)
}

function parar(){
    clearTimeout(frase)
}
