const API_KEY = "a0be9911b60dfebce9c1ed3f9a6d458f";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

	//promise : 비동기 코드가 끝나면 반환된다. 비동기 처리의 상태와 데이터를 담게 되어 있다.
	//.then : 비동기 처리가 끝난 다음에 처리할 일을 정의할 수 있다.
	//첫 번째 .then에서 반환해준  Promise를 두 번째 .then에서 받아 PromiseResult에 담긴 값을 사용한다.
    fetch(url).then(Response => Response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp} ℃ `;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);