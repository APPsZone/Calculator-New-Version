var button = document.querySelector(".container-btn");
var screen = document.querySelector("#screen");

button.addEventListener("click", function (e) {
	var btnClick = e.target;
	var valueBtn = btnClick.innerText;

	// Concatenate in JS
	//"String" + VARIABLE + "String (again)"
	//"String" + FUNCTION()
	//VARIABLE + FUNCTION()

	if (valueBtn == "C") {
		screen.value = "";
	} else if (valueBtn == "<") {
		screen.value = screen.value.slice(0, -1);
	} else if (valueBtn == "=") {
		screen.value = eval(screen.value);
	} else {
		screen.value = screen.value + valueBtn;
	}
});
