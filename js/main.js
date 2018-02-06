// TASK 1

var output, a, b, c;
a = 3;
b = 5; 

output = "var a = 3;\nvar b = 5;\nvar c;\n---------\n" + 
    "a + b = " + (a + b) + "\n" + 
    "a - b = " + (a - b) + "\n" + 
    "a * b = " + (a * b) + "\n" + 
    "a / b = " + (a / b) + "\n" + 
    "a % b = " + (a % b) + "\n" + 
    "(a += b): " + (a += b) + "\n" + 
    "(a -= b): " + (a -= b) + "\n" + 
    "(a *= b): " + (a *= b) + "\n" + 
    "(a /= b): " + (a /= b) + "\n" + 
    "(a %= b): " + (a %= b) + "\n" + 
    "(a == b): " + (a == b) + "\n" +
    "(a != b): " + (a != b) + "\n" +
    "(a > b): " + (a > b) + "\n" + 
    "(a < b): " + (a < b) + "\n" +
    "(!a && !c): " + (!a && !c) + "\n" +
    "(!a || !c): " + (!a || !c) + "\n";

alert(output);

// TASK 2

var first_name,last_name,email,output;
first_name = "Andrea";
last_name = "Galindo";
email = "gali0039@algonquinlive.com";

output = "My name is" + " " + (first_name) + " " + (last_name) + "." + " " + "You can contact me at" + " " + (email);

alert(output);

// TASK 3

var numbers = [
    Math.floor(Math.random(15) * (200 - 100) + 100), 
    Math.floor(Math.random(27) * (200 - 100) + 100), 
    Math.floor(Math.random(11) * (200 - 100) + 100), 
    Math.floor(Math.random(44) * (200 - 100) + 100), 
    Math.floor(Math.random(42) * (200 - 100) + 100)
];

    
/*var sum = (Math.floor + Math.random);


if (sum === oddNumber) {
    console.log("This is an odd number.");
} else {
    console.log("This is an even number.");
}

alert(numbers);*/

var num = numbers[0];
var num2 = numbers[(numbers.length - 1)];
var sum = (num + num2);


if (sum % 2 === 0){
    alert (num +" + "+ num2+ " = " + sum +"\n"+ " This is  an even number");
} else {
    alert(num +" + "+ num2 +" = " + sum +"\n" +" This is  an odd number");
}

