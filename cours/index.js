//SELECTOR
//document.querySelector("h4").style.fontSize = "100px";
//document.querySelector("#btn-1").style.fontSize = "50px";
//document.querySelector("#btn-2").style.fontSize = "50px";
//document.querySelector("p").style.fontSize = "25px";
//const balisHtml = document.querySelector("h4");


// //Click event
// const questionContainer = document.querySelector(".click-event");
// const btn1 = document.querySelector("#btn-1");
// const btn2 = document.getElementById("btn-2")
// const respons = document.querySelector("p");



// questionContainer.addEventListener("click", () => {
// 	questionContainer.classList.toggle("question-click")
// })

// btn1.addEventListener("click", () => {
// 	respons.classList.add("show-response")
// 	respons.style.background = "green";
// })

// btn2.addEventListener("click", () => {
// 	respons.classList.add("show-response")
// 	respons.style.background = "red";
// })

// //-----------------------------------------------------------------
// //Mouse Events 
// const mousemove = document.querySelector(".mousemove");

// window.addEventListener("mousemove", (e) => {
// 	mousemove.style.left = e.pageX + "px";
// 	mousemove.style.top = e.pageY + "px";
// })

// window.addEventListener("mousedown", () => {
// 	mousemove.style.transform = "scale(2) translate(-50%, -25%)";
// })

// window.addEventListener("mouseup", () => {
// 	mousemove.style.transform = "scale(1) translate(-50%, -50%)";
// 	mousemove.style.border = "2px solid teal";
// })

// questionContainer.addEventListener("mouseenter", () => {
// 	questionContainer.style.background = "rgba(0,0,0,0.6)";
// })

// respons.addEventListener("mouseover", () => {
// 	respons.style.transform = "rotate(2deg)";
// })

// //--------------------------------------------------------------------
// // KeyPress event
// const keypressContainer = document.querySelector(".keypress");
// const key = document.getElementById("key")

// document.addEventListener("keypress", (e) => {
// 	key.textContent = e.key;

// 	if (e.key === "j") {
// 		keypressContainer.style.background = "pink"; 
// 	} else if (e.key === "h") {
// 		keypressContainer.style.background = "teal";
// 	}else {
// 		keypressContainer.style.background = "red";
// 	}
// });

// //---------------------------------------------------------------------
// //Scroll Event
// const nav = document.querySelector("nav");

// window.addEventListener("scroll", () => {
// 	console.log(window.scrollY);
	
// 	if (window.scrollY > 120) {
// 		nav.style.top = 0;
// 	}else {
// 		nav.style.top = "-50px";
// 	}
// })

// //-----------------------------------------------------------------------------
// //from Event
// const inputName = document.querySelector('input[type="text"]');
// const select = document.querySelector("select")
// const form = document.querySelector("form");
// let pseudo = ""; 
// let language = "";


// inputName.addEventListener("input", (e) => {
// 	pseudo = e.target.value;
// 	console.log(pseudo);
// })

// select.addEventListener("input", (e) => {
// 	language = e.target.value; 
// })

// form.addEventListener("submit", (e) => {
// 	e.preventDefault();
	
// 	if (cgv.checked) {

// 	} else{
// 		alert("Veuillez accepter les CGV")
// 	}
// })

//-----------------------------------------------------------------------------------------
// un Booléen qui, lorsqu'il est vrai indique que le déplacement de la souris entraine un dessin sur le canvas
let isDrawing = false
let x = 0;
let y = 0;

const myPics = document.getElementById('myPics');
const context = myPics.getContext('2d');

//on récupére le décalage du canvas en x et y par rapport aux bords de la page
const rect = myPics.getBoundingClientRect();

//On ajoute les gestionnaires d'événement pour mousedown, mousemove et mouseup
myPics.addEventListener('mousedown', e => {
	x = e.clientX - rect.left;
	y = e.clientY - rect.top;
	isDrawing = true;
});

myPics.addEventListener('mousemove', e => {
	if (isDrawing === true) {
		drawline(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
		x = e.clientX - rect.left;
		y = e.clientY - rect.top;
	}
});

window.addEventListener('mouseup', e => {
	if (isDrawing === true) {
		drawline(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
		x = 0;
		y = 0;
		isDrawing = false
	}
});

function drawline(context, x1, y1, x2, y2) {
	context.beginPath();
	context.strokStyle = 'black';
	context.lineWidth = 1;
	context.moveTo(x1, y2);
	context.lineTo(x2, y2);
	context.stroke();
	context.closePath();
}

