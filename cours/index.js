//SELECTOR
//document.querySelector("h4").style.fontSize = "100px";
//document.querySelector("#btn-1").style.fontSize = "50px";
//document.querySelector("#btn-2").style.fontSize = "50px";
//document.querySelector("p").style.fontSize = "25px";
//const balisHtml = document.querySelector("h4");


//Click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2")
const respons = document.querySelector("p");



questionContainer.addEventListener("click", () => {
	questionContainer.classList.toggle("question-click")
})

btn1.addEventListener("click", () => {
	respons.classList.add("show-response")
	respons.style.background = "green";
})

btn2.addEventListener("click", () => {
	respons.classList.add("show-response")
	respons.style.background = "red";
})

//-----------------------------------------------------------------
//Mouse Events 
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
	mousemove.style.left = e.pageX + "px";
	mousemove.style.top = e.pageY + "px";
})

window.addEventListener("mousedown", () => {
	mousemove.style.transform = "scale(2) translate(-50%, -25%)";
})

window.addEventListener("mouseup", () => {
	mousemove.style.transform = "scale(1) translate(-50%, -50%)";
	mousemove.style.border = "2px solid teal";
})

questionContainer.addEventListener("mouseenter", () => {
	questionContainer.style.background = "rgba(0,0,0,0.6)";
})

respons.addEventListener("mouseover", () => {
	respons.style.transform = "rotate(2deg)";
})

//--------------------------------------------------------------------
// KeyPress event
const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key")

console.log(key)