const clock = document.querySelector("h2#clock");

function getClock() {
	const date = new Date();
	// ??.padStart(a, b)는 ??인 문자열이 a가 2글자가 아니면, 앞에 b를 추가
	// 반대로 ??.padEnd(a, b)
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");

	clock.innerText = `${hours}:${minutes}:${seconds}`;
}	

getClock()
//매번 1초마다 일어나는 무언가
setInterval(getClock, 1000);