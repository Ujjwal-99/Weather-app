const container= document.querySelector('container');
const error= document.querySelector('.error');
const weatherBox= document.querySelector('weather-box');
const weatherDetail= document.querySelector('.weather-detail');
const search= document.querySelector('.search-box');

search.addEventListener('click',()=>{
    const key ='30836e0b5875d209156e233a3cfd5309';
    const city= document.querySelector('.search-box input').Value;
   
    if (city==='') return;
   
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`).then((Response)=>Response.json()).then((json)=>{
        if(json.cod==='404'){
        container.style.height='505px';
        weatherBox,.style.display='none';
        weatherDetail.style.display='none';
        error.style.display='block';
        return;
        }
    error.style.display='none';
   
    const img= document.querySelector('.weather-box img');
    const temperature=document.querySelector('.weather-box.temp');
    const description=document.querySelector('.weather-box.disc');
    const humidity=document.querySelector('.weather-detail.humidity span');
    const wind=document.querySelector('.weather-detail.speed span ');
   
   
    switch(json.weather[0].main){
        case 'Clould':
        img.src="/weather-app/image/cloud.png";
        break;
        case 'Clear':
        img,src='/weather-app/image/clear.png';
        break;
        case 'Rain':
        img.src='/weather-app/image/rain.png';
        break;
        case 'Haze':
        img.src='/weather-app/image/mist.png';
        break;
        case 'Snow':
        img.src='/weather-app/image/snow.png';
        break;
        default:
					img.src = '';
					break;
    }
   
    temp.innerHTML=`${json.main.temp}<span>&degC</span>`;
    disc.innerHTML=`${json..weather[0].description}`;
    humidity.innerHTML=`${json.maiin.humidity}%`;
    speed.innerHTML=`${json.wind.speed}km/h`;
   
    container.style.height='505px';
    weatherBox.style.display='Block';
    weatherDetail.style.display='flex';
})
})