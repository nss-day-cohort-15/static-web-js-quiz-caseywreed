
var button = document.getElementById("button");
button.addEventListener("click", makeTree);
document.addEventListener("keydown", enter);


function enter(e) {
  if (13 == e.keyCode) {
     makeTree()
  }
}

var tree = {}

// console.log(tree)

function makeTree(tree) {
  tree.height = document.getElementById("height").value;
  tree.character = document.getElementById("character").value;
	var counter = 1;

	if (tree.character === "" || tree.height === "")
		alert("ERROR: Both fields must have a value. You've ruined Christmas.")

	for (i = 0; i < tree.height; i++) {
		console.log(" ".repeat(tree.height-i) + tree.character.repeat(counter))
		counter += 2;
	}
}

