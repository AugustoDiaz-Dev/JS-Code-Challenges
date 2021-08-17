//EDABIT code Challenges LEVEL: VERY EASY

            //001 SINTAXIS ERROR

//Fix the code in the code tab to pass this challenge (only syntax errors). 
//Look at the examples below to get an idea of what the function should do.
function cubes(a) {
	retunr a ** 3;
}

            //002 SOLVE INFINITE LOOP

//Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge.
  // printArray(1) ➞ [1]
  // printArray(3) ➞ [1, 2, 3]
  // printArray(6) ➞ [1, 2, 3, 4, 5, 6]
function printArray(number) {
    var newArray = [];
  
    for(var i = 1; i <= number.lenght;) {
      newArray.push(i);
    }
  
    return newArray;
  } 

            //003 COMPARE WITH CONDITIONALS

//Create a function that returns true when num1 is equal to num2; otherwise return false.
function isSameNum(num1, num2) {
	
}

            //004 RETURN THE FIRST ELEMENT OF AN ARRAY

//Create a function that takes an array containing only numbers and return the first element.
function getFirstValue(arr) {
	
}

            //005 FUNCTION WITH && OPERATOR

//Make a function using the && operator.
function and(a, b) {
	
}
            //006 SWAP TWO GIVEN NUMBERS

//Mubashir wants to swap two given numbers!
//It is not returning the right values. Can you help him fix it?
//Should print out "200, 100", but the function prints out "100, 100"
function swap(a, b) {
	b = a
	a = b
	return [a, b]
}

            //007 TOTAL NUMBER OF POINTS

// Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
// wins get 3 points
// draws get 1 point
// losses get 0 points
function footballPoints(wins, draws, losses) {
	
}

          //008 TOTAL NUMBER OF LEGS

// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
function animals(chickens, cows, pigs) {
	
}

          //009 RETURN THE FIRST ELEMENT IN AN ARRAY

// Create a function that takes an array containing only numbers and return the first element.
// Examples
// getFirstValue([1, 2, 3]) ➞ 1
// getFirstValue([80, 5, 100]) ➞ 80
// getFirstValue([-500, 0, 50]) ➞ -500
// Notes
// The first element in an array always has an index of 0.
function getFirstValue(arr) {
	
}

          //010 BASKETBALL POINTS

// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
// Examples
// points(1, 1) ➞ 5
// points(7, 5) ➞ 29
// points(38, 8) ➞ 100
function points(twoPointers, threePointers) {
	
}

          //011 ARE THE NUMBERS EQUAL?

// Create a function that returns true when num1 is equal to num2; otherwise return false.
// Examples
// isSameNum(4, 8) ➞ false
// isSameNum(2, 2) ➞  true
// isSameNum(2, "2") ➞ false
// Notes
// Don't forget to return the result.
function isSameNum(num1, num2) {

}

          //012 AREA OF A TRIANGLE

// Write a function that takes the base and height of a triangle and return its area.
// Examples
// triArea(3, 2) ➞ 3
// triArea(7, 4) ➞ 14
// triArea(10, 10) ➞ 50
// Notes
// The area of a triangle is: (base * height) / 2
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
function triArea(base, height) {
	
}

          //013 BASIC VARIABLE ASSIGNMENT

// A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.
// Examples
// nameString("Mubashir") ➞ "MubashirEdabit"
// nameString("Matt") ➞ "MattEdabit"
// nameString("javaScript") ➞ "javaScriptEdabit"

function nameString(name){
	var b == "Edabit"
	var result == name + b
  	return result
}

          //014 SUM OF POLYGON ANGLES

// Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).
// Examples
// sumPolygon(3) ➞ 180
// sumPolygon(4) ➞ 360
// sumPolygon(6) ➞ 720
// Notes
// n will always be greater than 2.
// The formula (n - 2) x 180 gives the sum of all the measures of the angles of an n-sided polygon.
function sumPolygon(n) {
	
}

          //015 POWER CALCULATOR 


// Create a function that takes voltage and current and returns the calculated power.
// Examples
// circuitPower(230, 10) ➞ 2300
// circuitPower(110, 3) ➞ 330
// circuitPower(480, 20) ➞ 9600
function circuitPower(voltage, current) {
	
}