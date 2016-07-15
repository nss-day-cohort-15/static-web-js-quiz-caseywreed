
var button = document.getElementById("button");
button.addEventListener("click", makeTree);

function makeTree() {

	var character = document.getElementById("character").value;
	var height = document.getElementById("height").value;
	var counter = 1;

	if (character === "" || height === "")
		alert("ERROR: Both fields must have a value")

	for (i = 0; i < height; i++) {
		console.log(" ".repeat(height-i) + character.repeat(counter))
		counter += 2;
	}
}

