// Time & Date

setInterval(clockTime, 1000);

function clockTime() {
	const clock = document.querySelector('.clock');
	const day = document.querySelector('.day');
	const hr = document.querySelector('.hour');
	const min = document.querySelector('.min');
	const sec = document.querySelector('.sec');
	const time = new Date();

	let ss = time.getSeconds() / 60;
	let mm = (ss + time.getMinutes()) / 60;
	let hh = (mm + time.getHours()) / 12;
	let d = time.getDay();
	let t = time.getMonth();
	let n = time.getDate();
	let y = time.getFullYear();
	let h = time.getHours();
	let m = time.getMinutes();
	let s = time.getSeconds();

	if (h < 10) h = '0' + h;
	if (m < 10) m = '0' + m;
	if (s < 10) s = '0' + s;
	if (n < 10) n = '0' + n;

	let week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'];

	// analog clock

	let rotate = 360;
	hr.style.transform = `rotateZ(${hh*rotate}deg)`;
	min.style.transform = `rotateZ(${mm*rotate}deg)`;
	sec.style.transform = `rotateZ(${ss*rotate}deg)`;

	// digital clock

	clock.innerText = `${h}:${m}:${s}`;
	day.innerText = `${week[d]} - ${month[t]} ${n} - ${y}`;
}