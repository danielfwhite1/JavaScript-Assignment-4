// 1. Using template literals, write a function that takes firstName and lastName and returns 'firstName lastName'
function fullName(firstName, lastName) {
    return `${firstName.trim()} ${lastName.trim()}`;
}
console.log(fullName("danny ", " white"));

// 2. Write the same function as an arrow function with a different name
const fullNameArrow = (fName, lName) => `${fName.trim()} ${lName.trim()}`;
console.log(fullNameArrow(' danny', ' white'));

// 3a. Using setTimeout, write an inline, anonymous arrow function in the callback parameter position.
// The function should alert 'Time is up!' Choose whatever length of time you want for the timeout.
setTimeout( () => alert('Time is up!'), 3000);

// window.setTimeout(window.alert, 5.0*1000, 'Time is up!');

// 3b. Write an arrow function named askAreWeThereYet that alerts 'Are we there yet?".
// Using setInterval, pass askAreWeThereYet into the callback parameter position. Choose whatever length of time for interval.
const areWeThereYet = () => alert("Are we there yet?");

// repeat with interval of 4 seconds
let callbackInterval = setInterval(areWeThereYet, 4000);

// we are here after 16 seconds
setTimeout( () => { 
    clearInterval(callbackInterval);
    alert('We are here!');
}, 16000);

// 4. Write a function processSplicedValue that takes 3 parameters - 
//      an array, the index of the element to be spliced from the array, and a callback that will process the sliced element.
// Inside the function, use the first two parameters to splice an element from the array.
function processSplicedValue(array, spliceIndex, splicedElementCallback) {
    let splicedValue = array.splice(spliceIndex, spliceIndex + 1);
    splicedElementCallback(splicedValue);
    console.log(splicedValue);
};

// Outside your function, create an array of strings, call processSplicedValue, and pass the array, an index number, and console.log into it.
const stringArray = ["Hello World", "My name is Danny", "This is an array"];
processSplicedValue(stringArray, 1, console.log);

// Call the processSplicedValue function again, but this time pass in the alert method instead of console.log
const stringArray1 = ["Hello World", "My name is Danny", "This is an array"];
processSplicedValue(stringArray1, 0, alert);

// Call the processSplicedValue function again, but this time pass in an anonymous arrow function that alerts the spliced value.
const stringArray2 = ["Hello World", "My name is Danny", "This is an array"];
processSplicedValue(stringArray2, 1, parameter => {alert(parameter)});

// Call the processSplicedValue function one more time, but this time, pass in a custom function of your choice that you should create and name.
customFunction = parameter => {
    const domNode = document.getElementById("splicedValue");
    domNode.innerText = parameter;
    const paragraph = document.createElement('p');
    paragraph.text = parameter;
    domNode.appendChild(paragraph);
};
const stringArray3 = ["Hello World", "My name is Danny", "This is an array"];
processSplicedValue(stringArray3, 1, customFunction);


