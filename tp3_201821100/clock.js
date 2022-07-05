const clock  = document.querySelector('.h1-clock');

function Time(){
	const today = new Date();

	const mon = today.getMonth();
	const date = today.getDate();
	const day = today.getDay();
	const week = ['일','월','화','수','목','금','토'];
	
	const hour = today.getHours();
	const min = today.getMinutes();
	const sec = today.getSeconds();
	clock.innerHTML = `${mon+1}월 ${date}일 ${week[day]}요일<br> ${hour<10 ? `0${hour}`:hour} : ${min<10 ? `0${min}`:min} : ${sec<10 ? `0${sec}`:sec}`;
}

function init(){
	setInterval(Time, 1000);
}

init();