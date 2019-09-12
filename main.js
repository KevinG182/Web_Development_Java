function main() {
	console.log("Hello World!");

	addButtonListener("task-submit", submitButtonClicked);
}

function submitButtonClicked() {
	//get the test input
	var input_box = document.getElementById("task-input");
	//get its value
	var input_value = input_box.value;
	//print to console
	console.log(input_value);
}

function addButtonListener(element_id, callbackFunction) {
	var button = document.getElementById(element_id);
	button.addEventListener('click', callbackFunction);
}

document.addEventListener('DOMContentLoaded', main);