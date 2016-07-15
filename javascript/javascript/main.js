
var button = document.getElementById("button");
button.addEventListener("click", makeTree);
document.addEventListener("keydown", enter);


function enter(e) {
  if (13 == e.keyCode) {
     makeTree()
  }
}

function makeTree() {

	var character = document.getElementById("character").value;
	var height = document.getElementById("height").value;
	var counter = 1;

	if (character === "" || height === "")
		alert("ERROR: Both fields must have a value. You've ruined Christmas.")

	for (i = 0; i < height; i++) {
		console.log(" ".repeat(height-i) + character.repeat(counter))
		counter += 2;
	}
}

