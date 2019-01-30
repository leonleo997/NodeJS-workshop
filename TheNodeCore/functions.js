// Function statement
function greet() {
    console.log('Hello world');
}

greet();

// Function are first-class
function logGreeting(fn) {
    fn();
}
logGreeting(greet);

// function expression
var greetMe = function() {
    console.log('Hi yesid');
}
greetMe();

// it's first class
logGreeting(greetMe);