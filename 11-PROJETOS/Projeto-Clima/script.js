document.querySelector('.busca').addEventListener('submit', async (event)=>{
    event.preventDefault();

    let inputValue = document.querySelector('#searchInput').value;

    if(inputValue != ''){
        showRunning("Carregando...");

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(inputValue)}&appid=08c210d9f5e699f53b6b4d8f7c488ffd&units=metric&lang=pt_br`;

        let req = await fetch(url);
        let json = await req.json();

        if(json.cod === 200){
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg
            });

        }else{
            clearInfo();
            showRunning('Localização não encontrada.');
        }
    }else{
        clearInfo()
    }
});

function showInfo(json){
    showRunning("");

    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`;
    document.querySelector('.tempInfo').innerHTML = `${json.temp}<sup>ºC</sup>`;
    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);
    document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed}<span>km/h</span>`;
    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle - 90}deg)`

    document.querySelector(".resultado").style.display = 'block';
}

function clearInfo(){
    document.querySelector(".resultado").style.display = 'none';
}


function showRunning(msg){
    document.querySelector('.aviso').innerHTML = msg;
}