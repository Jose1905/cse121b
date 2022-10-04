/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let name = document.getElementById('name');

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
name.innerHTML = 'José David Vega';

// Step 3: declare and instantiate a variable to hold the current year
let currentYear = document.getElementById('year')

// Step 4: place the value of the current year variable into the HTML file
currentYear.innerHTML = new Date().getFullYear();

// Step 5: declare and instantiate a variable to hold the name of your picture
let pictureDavid = document.querySelector('img')

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
pictureDavid.setAttribute('src', 'images/david.jpg')



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let favoriteFoods = document.getElementById('food');

// Step 2: place the values of the favorite foods variable into the HTML file
favoriteFoods.textContent = 'Sushi, '

// Step 3: declare and instantiate a variable to hold another favorite food
let food2 = 'Pizza, '

// Step 4: add the variable holding another favorite food to the favorite food array
favoriteFoods.append(food2)

// Step 5: repeat Step 2
let food3 = 'Hamburger, '

// Step 6: remove the first element in the favorite foods array
favoriteFoods.append(food3)

// Step 7: repeat Step 2
let food4 = 'Tacos'

// Step 8: remove the last element in the favorite foods array
favoriteFoods.append(food4)

// Step 7: repeat Step 2



