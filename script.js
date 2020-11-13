const h3 = document.querySelector('h3');
const inputColor1 = document.getElementById("color1")
const inputColor2 = document.getElementById("color2")
const body = document.getElementById("gradient")


inputColor1.addEventListener("input", (e)=>{
	// console.log(inputColor2.value);
	// can either use inputColor1.value to get that value or u can use e.target.value to get that value
	body.style.background= `linear-gradient(to right, ${e.target.value}, ${inputColor2.value})`
	h3.innerText=body.style.background;
	
})

inputColor2.addEventListener("input", (e)=> {
	// console.log(inputColor1.value);
	// can either use inputColor1.value to get that value or u can use e.target.value to get that value
	body.style.background= `linear-gradient(to right, ${inputColor1.value}, ${e.target.value})`
	h3.innerText=body.style.background;
	
})