//clear values
function clearAll() {
	document.getElementById('result').value = '';
}

//display inputs
function display(value) {
	document.getElementById('result').value +=value;
	
}
//calculation
function calculate() {
let p = document.getElementById('result').value;
let q = eval(p)
document.getElementById('result').value = q;
}