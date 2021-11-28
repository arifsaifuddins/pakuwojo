// toggle

const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", function () {
	menu.classList.toggle("slide");
});

// smooth scroll

const menuLink = document.querySelectorAll(".link-js");

function smoothScroll() {
	for (let i in menuLink) {
		if (menuLink.hasOwnProperty(i)) {
			menuLink[i].addEventListener("click", function (e) {
				document.querySelector(menuLink[i].hash).scrollIntoView({
					behavior: "smooth",
				});
				e.preventDefault();
			});
		}
	}
}
smoothScroll();

// scroll to top

const toTop = document.querySelector(".top");

window.addEventListener("scroll", function () {
	if (window.pageYOffset >= 300) {
		toTop.classList.add("scroll");
	} else {
		toTop.classList.remove("scroll");
	}
});

// committee

const seen = document.querySelectorAll(".see");

seen.forEach(function (klik) {
	klik.addEventListener("click", function (e) {
		e.target.previousElementSibling.firstElementChild.nextElementSibling.nextElementSibling.classList.toggle(
			"add"
		);
		e.target.previousElementSibling.previousElementSibling.classList.toggle(
			"add"
		);
		e.target.classList.add("fas");
		e.target.classList.add("fa-angle-down");
	});
});

// mode

const mode = document.querySelectorAll(".mode");
const html = document.querySelector("html");

html.dataset.mode = localStorage.getItem('mode');
mode.forEach(function (modes) {
	modes.addEventListener("click", function () {
		if (html.dataset.mode === "light") {
			html.dataset.mode = "dark";
			localStorage.setItem('mode', html.dataset.mode = "dark");
		} else {
			html.dataset.mode = "light";
			localStorage.setItem('mode', html.dataset.mode = "light");
		}
	});
});