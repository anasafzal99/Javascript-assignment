// var name = prompt("What's your name?");
// alert ("Hi," + name  );

////////////////

// var num = parseInt (prompt("Enter a number to get its multiplication table", 5));
// for(var i=1; i<=10; i++) {
//     document.write(num + "x" + i + "=" + i * num + "<br>");
// }


//////////////////////

// var city = prompt("Please ene your city name?", "Karachi");
// if (city === "Karachi"){
//     console.log(" Welcome to the city of lights! " + city);
// }
// else{
//     console.log(Enter correct name)

// }

//////////////////////////////

// var input = prompt("Please clerify your gender");
// if (input === "Male"){
//     console.log("Good Morning Sir!");
// }
// else if (input === "Female") {
//     console.log("Good Morning Mam!");

// }


/////////////////////////

// var input = prompt("Please enter color (red, yellow, green)");
// if (input === "red"){
//     console.log("Vehicles must stop");
// }
// else if (input === "yellow") {
//     console.log("Vehicles should get ready to move");

// }

// else if (input  === "green") {
//     console.log("Vehicles can move now.");
//   }


///////////////////////

// var currentInput = prompt("Please enter your current age");
// var maxInput = prompt("Please enter your max age");
// if (currentInput >= maxInput){
//     console.log("You are welcome!");
// }


// var checkFuel = parseFloat(prompt("Enter the remaining fuel (in liters)"));
// if (checkFuel < 0.25) {
//     console.log("Please refill the fuel in your car.");
//   } else {
//     console.log("Fuel level is sufficient.");
//   }



//////////////////////////



//  var a = 4;
// if (++a === 5){
//  alert("given condition for variable a is true" );
// }

/////////////////////


// var b = 82;
// if (b++ === 83){
//  alert("given condition for variable b is true");
// }

////////////////////


// var c = 12;
// if (c++ === 13){
//  alert("condition 1 is true");
// }
// if (c === 13){
//  alert("condition 2 is true");
// }
// if (++c < 14){
//  alert("condition 3 is true");
// }
// if(c === 14){
//  alert("condition 4 is true");
// }

//////////////////////

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//  alert("The cost equals");
// }

////////////////


//  if (true){
//  alert("True");
// }
// if (false){
//  alert("False");
// }

/////////////////


//  if("car" < "cat"){
//  alert("car is smaller than cat");
// }


////////////////////////


// var firstSub = parseFloat(prompt("enter marks of physics"));
// var secondSub = parseFloat(prompt("enter marks of chemistry"));
// var thirdSub = parseFloat(prompt("enter marks of biology"));
// var total = parseFloat(prompt("enter total marks"));

// var obtained = firstSub + secondSub + thirdSub;
// var percentage = (obtained / total) * 100;
// if (percentage >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";}
//     // console.log("Percentage: " + percentage + "%");}
//   else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
//   } else if (percentage >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
//   } else {
//     grade = "Fail";
//     remarks = "Sorry";
//   }
//   console.log("Percentage: " + percentage.toFixed(2) + "%");
//   console.log("Grade: " + grade);
//   console.log("Remarks: " + remarks);



///////////////////////////////////////



// var item1Name = prompt("Enter the name of Item 1:");
//   var item1Price = parseFloat(prompt("Enter the price of Item 1 (in PKR):"));
//   var item1Quantity = parseInt(prompt("Enter the ordered quantity of Item 1:"));
//   var item2Name = prompt("Enter the name of Item 2:");
//   var item2Price = parseFloat(prompt("Enter the price of Item 2 (in PKR):"));
//   var item2Quantity = parseInt(prompt("Enter the ordered quantity of Item 2:"));
//   var shippingCharges = parseFloat(prompt("Enter the shipping charges (in PKR):"));
//     var item1Cost = item1Price * item1Quantity;
//     var item2Cost = item2Price * item2Quantity;
//     var subtotal = item1Cost + item2Cost;
//     if (subtotal > 2000) {
//       discount = subtotal * 0.1; // 10% discount
//     }
//     let discount = 0;
//     var totalCost = subtotal + shippingCharges - discount;
//     document.write("<h2>Receipt</h2>");
//     document.write("<p><strong>Item 1:</strong> " + item1Name + "</p>");
//     document.write("<p><strong>Price of Item 1:</strong> " + item1Price + " PKR</p>");
//     document.write("<p><strong>Ordered Quantity of Item 1:</strong> " + item1Quantity + "</p>");
//     document.write("<p><strong>Item 2:</strong> " + item2Name + "</p>");
//     document.write("<p><strong>Price of Item 2:</strong> " + item2Price + " PKR</p>");
//     document.write("<p><strong>Ordered Quantity of Item 2:</strong> " + item2Quantity + "</p>");
//     document.write("<p><strong>Shipping Charges:</strong> " + shippingCharges + " PKR</p>");
//     document.write("<p><strong>Discount:</strong> " + " PKR</p>");
//     document.write("<p><strong>Total Cost:</strong> " + " PKR</p>");


/////////////////////////////////////////////////////



// var secNum = 2;
// var userGuess = parseFloat(prompt("Guess the secret number"));
// if (userGuess == secNum) {
//     console.log("Bingo!");
// }


//   else if  (userGuess === secNum + 1 || userGuess === secNum - 1) {
//     console.log("Close enough to the correct answer");
// }

// else {
//     console.log("Sorry, wrong guess. The secret number was " + secNum + ".");
//   }
  

/////////////////


// var checkNum = parseInt(prompt("Enter your num"));

// if (checkNum % 3 === 0) {
//     console.log("Its divideable");
// }

// else {
//     console.log("Not divideable");
// }

//////////////////


// var teamName1 = prompt("Enter team name");
// var totalScore = 200;
// if (teamName1 == "pakistan") {
//     console.log(teamName1 + " have on the game " + totalScore);
// } 

// else {
//     console.log(teamName1 + " have lost the game");
// }


///////////////

// var stringInput = prompt("Enter any sting ");
// var numInput = prompt("Enter any number ");
// var boolInput = prompt("Enter boolean value(true, false) ");
// numInput = parseInt(numInput);
// boolInput = Boolean(boolInput);


// alert("Type of " + stringInput + " is "+ typeof(stringInput));
// alert("Type of " + numInput + " is "+ typeof(numInput));
// alert("Type of " + boolInput + " is "+ typeof(boolInput));


/////////////////////////////

// var numcheck = parseInt(prompt("Put number" ));
// if (numcheck % 2 === 0) {
//     console.log("number is even");

// }

// else {
//     console.log ("number is odd");
// }


////////////////////

// var tempCheck = parseInt(prompt("Check your area weather"));
// if (tempCheck > 40) {
//     console.log("It is too hot outside");
// }
//  else if (tempCheck > 30 && tempCheck<40) {
//     console.log("The Weather today is Normal");
// }
// else if (tempCheck > 20 && tempCheck<30) {
//     console.log("Today’s Weather is cool.");
// }
// else (tempCheck > 10 && tempCheck<20) 
// {
//     console.log("OMG! Today’s weather is so Cool");

// }

/////////////////////////////

// var num1 = parseInt(prompt("Enter your first number" ));
// var num2 = parseInt(prompt("Enter your second number" ));
// var operation = (prompt("Enter the operation (+, -, *, % )"));
// var result = (num1 + num2 );
// if (operation === "+") {
//    result = num1 + num2;
// }

// else if (operation === "%") {
//     result = num1 % num2;
// }

// else if (operation === "*") {
//     result = num1 * num2;
// }

// else if (operation === "-") {
//     result = num1 - num2;
// }

// console.log("Result;" + result );

/////////////////////

// var dayName = (prompt("Enter day" ));
// if (dayName == "Monday" || dayName == "Tuesday" || dayName == "Wednesday" || dayName == "Thursday" || dayName == "Friday") {
//     console.log ("It's a week day");
// }
// else if (dayName == "Saturday") {
//     console.log ("It’s weekend");
// }

// else if (dayName == "Sunday") {
//     console.log ("Yay! It’s a holiday");
// }
// else{
//     console.log ("Invalid Input");
// }


/////////////

// var userInput = parseInt(prompt("Enter your nmber"));
// if (userInput > "50") {
//     console.log ("You ae passed");
// } 

// else {
//     console.log("Try again");
// }


/////////////////////////


// var num1 = parseInt(prompt("Enter your nmber"));
// var num2 = parseInt(prompt("Enter your nmber"));
// if (num1 == num2) {
//     console.log("The greater number of " + num1 + " And" + num2 );
// }

/////////////////////


// var userInput = parseInt(prompt("Enter your nmber"));
// number = userInput;
// if (number > 0) {
//     console.log(number + " is a positive number.");
//   } else if (number < 0) {
//     console.log(number + " is a negative number.");
//   } else {
//     console.log(number + " is neither positive nor negative (it is zero).");
//   }


///////////////////////////
  
// var userInput = (prompt("Enter noun"));
// var userInput2 = parseInt(prompt("Enter number"));
// var result = userInput + userInput2
// console.log("Output is: " + result);

/////////////////////////////////



// // Declare an array to store the names of the students
// var names = ["Kashif", "Adil", "Javed"];

// // Declare another array to store the scores of the students
// var scores = [320, 230, 480];

// // Declare a variable to store the total marks for each student
// var total = 500;

// // Loop through the names and scores arrays and display the results
// for (var i = 0; i < names.length; i++) {
//   // Calculate the percentage of each student
//   var percentage = (scores[i] / total) * 100;

//   // Display the score and percentage of each student
//   console.log("Score of " + names[i] + " is " + scores[i] + ". Percentage is " + percentage.toFixed(2) + "%");
// }


///////////////////////////////////////////





// // Declare an array to store the color names
// var colors = ["red", "green", "blue"];

// // Display the array elements in the browser
// document.write("The original array is: " + colors + "<br>");

// // Ask the user what color he/she wants to add to the beginning of the array
// var color1 = prompt("Enter a color name to add to the beginning of the array");

// // Add that color to the beginning of the array
// colors.unshift(color1);

// // Display the updated array in the browser
// document.write("The updated array after adding " + color1 + " to the beginning is: " + colors + "<br>");

// // Ask the user what color he/she wants to add to the end of the array
// var color2 = prompt("Enter a color name to add to the end of the array");

// // Add that color to the end of the array
// colors.push(color2);

// // Display the updated array in the browser
// document.write("The updated array after adding " + color2 + " to the end is: " + colors + "<br>");

// // Add two more colors to the beginning of the array
// colors.unshift("pink", "purple");

// // Display the updated array in the browser
// document.write("The updated array after adding two more colors to the beginning is: " + colors + "<br>");

// // Delete the first color in the array
// colors.shift();

// // Display the updated array in the browser
// document.write("The updated array after deleting the first color is: " + colors + "<br>");

// // Delete the last color in the array
// colors.pop();

// // Display the updated array in the browser
// document.write("The updated array after deleting the last color is: " + colors + "<br>");

// // Ask the user at which index he/she wants to add a color and color name
// var index = prompt("Enter an index where you want to add a color");
// var color3 = prompt("Enter a color name to add at that index");

// // Convert the index to a number
// index = parseInt(index);

// // Add the color to the desired position/index
// colors.splice(index, 0, color3);

// // Display the updated array in the browser
// document.write("The updated array after adding " + color3 + " at index " + index + " is: " + colors + "<br>");

// // Ask the user at which index he/she wants to delete color(s) and how many colors he/she wants to delete
// var index2 = prompt("Enter an index where you want to delete color(s)");
// var number = prompt("Enter how many colors you want to delete");

// // Convert the index and number to numbers
// index2 = parseInt(index2);
// number = parseInt(number);

// // Delete the same number of color(s) from user-defined position/index
// colors.splice(index2, number);

// // Display the updated array in the browser
// document.write("The updated array after deleting " + number + " color(s) from index " + index2 + " is: " + colors);



///////////////////////////////////

// // Declare a variable to store the sum
// var sum = 0;

// // Loop from 1 to 100 and add each number to the sum
// for (var i = 1; i <= 100; i++) {
//   sum = sum + i;
// }

// // Display the sum in the browser
// document.write("The sum of the first 100 numbers is: " + sum);


/////////////////////////////////////////////////

// // Prompt the user to enter a number
// var n = prompt("Enter a number");

// // Convert the input to a positive integer
// n = Math.abs(parseInt(n));

// // Create an empty string to store the output
// var output = "";

// // Loop through the rows from 1 to 10
// for (var i = 1; i <= 10; i++ ) {
//   // Loop through the columns from 1 to n
//   for (var j = 1; j <= n; j++) {
//     // Calculate the product of i and j
//     var product = i * j;
//     // Append the product to the output string with formatting
//     output += j + "x" + i + "=" + product + " ";
//   }
//   // Add a new line after each row
//   output += "\n";
// }

// // Display the output string
// document.write(output);



/////////////////////////////

console.log("Counting:");
for (i = 1; i >= 15; i++) {
    console.log(i);
}

console.log ("Reverse Counting");
for(i=10; i >= 1; i= i-- ) {
    console.log(i);
}

for (i = 0; i>= 20; i += 2){
    console.log(i);
}







