//Functions

const buttonElement1 = document.getElementById("submitButton1")
const inputBox1 = document.getElementById("inputBox1")
const output1 = document.getElementById("output1")
const buttonElement2 = document.getElementById("submitButton2")
const inputBox2 = document.getElementById("inputBox2")
const output2 = document.getElementById("output2")
const sumButton = document.getElementById("sumButton")
const substractButton = document.getElementById("substractButton")
const multiplyButton = document.getElementById("multiplyButton")
const divideButton = document.getElementById("divideButton")

function copyInput(inputElement, outputElement) {
		outputElement.innerHTML = inputElement.value;
	}

function sumNumbers(num1, num2) {
	document.getElementById("sumOutput").innerHTML = parseInt(num1.value) + parseInt(num2.value);
}

function substractNumbers(num1, num2) {
	document.getElementById("substractOutput").innerHTML = parseInt(num1.value) - parseInt(num2.value);
}

function multiplyNumbers(num1, num2) {
	document.getElementById("multiplyOutput").innerHTML = parseInt(num1.value) * parseInt(num2.value);
}

function divideNumbers(num1, num2) {
	document.getElementById("divideOutput").innerHTML = parseInt(num1.value) / parseInt(num2.value);
}

buttonElement1.addEventListener("click", function() {copyInput(inputBox1, output1);});
buttonElement2.addEventListener("click", function() {copyInput(inputBox2, output2);});
sumButton.addEventListener("click", function() {sumNumbers(inputBox1, inputBox2);});
substractButton.addEventListener("click", function() {substractNumbers(inputBox1, inputBox2);});
multiplyButton.addEventListener("click", function() {multiplyNumbers(inputBox1, inputBox2);});
divideButton.addEventListener("click", function() {divideNumbers(inputBox1, inputBox2);});


//Built-In Methods
let currentYear = document.getElementById('year');
currentYear.innerHTML = new Date().getFullYear();

//Array Methods
const numbersArray = document.getElementById('numbersArray');
// const oddNumbers = document.getElementById('odds');
// const evenNumbers = document.getElementById('evens');

for (let index = 1; index < 26; index++) {
	numbersArray.append(parseInt(index));
}

// oddNumbers.innerHTML = numbersArray.filter((n) => n % 2 == 1)