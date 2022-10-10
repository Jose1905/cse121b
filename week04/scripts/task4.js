/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
const myinfo = {
// Step 2: Inside of the object, add a property named name with a value of your name as a string
    name: 'David Vega',

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
    photo: 'images/david.jpg',
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
    favoriteFoods: ['Sushi', 'Sashimi', 'Pizza', 'Lasagna', 'Olla de Carne'],
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
    hobbies: ['Play the guitar', 'Play videogames', 'Cooking', 'Playing board games', 'Listening to heavy metal'],
// Step 6: Add another property named placesLived with a value of an empty array
    placesLived: [
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// Step 8: For each property, add appropriate values as strings
        {place: 'San José', length: '9.941177526342555'},
// Step 9: Add additional objects with the same properties for each place you've lived
        {place: 'Heredia', length: '10.005015230239765'}
    ]
}

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById('name').innerHTML = myinfo.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.getElementById('photo').src = myinfo.photo;
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementById('photo').alt = myinfo.name;
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let foodList = document.getElementById('favorite-foods');

myinfo.favoriteFoods.forEach(food => {
    let listItem = document.createElement('li');
    listItem.textContent = food;
    
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
    foodList.append(listItem);
});
// Step 6: Repeat Step 4 for each hobby in the hobbies property
let hobbyList = document.getElementById('hobbies');

myinfo.hobbies.forEach(hobby => {
    let listItem = document.createElement('li');
    listItem.textContent = hobby;
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
    hobbyList.append(listItem);
});
// Step 8: For each object in the <em>placesLived</em> property:
let locationsList = document.getElementById('places-lived');

myinfo.placesLived.forEach(location => {
// - Create an HTML <dt> element and put its place property in the <dt> element
    let listlocation = document.createElement('dt');
    listlocation.setAttribute('id', location.place);
// - Create an HTML <dd> element and put its length property in the <dd> element
    let listlenght = document.createElement('dd');
    listlenght.textContent = lenght.lenght;
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
    locationsList.appendChild(listlocation);
    document.getElementById(location.place).appendChild(listlenght);
});