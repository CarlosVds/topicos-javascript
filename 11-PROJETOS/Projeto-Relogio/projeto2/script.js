let digital = document.querySelector('.digital');
let ph = document.querySelector('.p_h');
let pm = document.querySelector('.p_m');
let ps = document.querySelector('.p_s');

function updateClock(){
    let now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    digital.innerHTML = `${zeroFix(h)}:${zeroFix(m)}:${zeroFix(s)}`;

    let hDeg = ((360 / 12) * h )- 90;
    let mDeg = ((360 / 60) * m )- 90;
    let sDeg = ((360 / 60) * s )- 90;
    
    ph.style.transform = `rotate(${hDeg}deg)`;
    pm.style.transform = `rotate(${mDeg}deg)`;
    ps.style.transform = `rotate(${sDeg}deg)`;

};

function zeroFix(time){
    return time < 10 ? `0${time}` : time;
};

setInterval(updateClock, 1000);
updateClock();