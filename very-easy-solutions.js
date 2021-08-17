//001 SINTAXIS ERROR

function cubes(a) {
	return a ** 3;
} //

//002 SOLVE INFINITE LOOP ***

function printArray(number) {
    var newArray = [];
  
    for(var i = 1; i <= number.lenght; i++) {
      newArray.push(i);
    }
  
    return newArray;
  }

printArray(1) //➞ [1]
printArray(3) //➞ [1, 2, 3]
printArray(6) //➞ [1, 2, 3, 4, 5, 6]

//003 COMPARE WITH CONDITIONALS

function isSameNum(num1, num2) {
	if(num1 === num2) {
        return true;
    } else {
        return false;
    }
}
isSameNum(4,4)

//004 RETURN THE FIRST ELEMENT OF AN ARRAY

function getFirstValue(arr) {
	return arr[0];
}
getFirstValue(['1','2','3'])

//005 FUNCTION WITH && OPERATOR

function and(a, b) {
	if( a === "Nice" && b === "job!") {
        return "That's it man!";
    } else {
        return false + " as your auntie";
    }
}
and("Nice", "job!");

//006 SWAP TWO GIVEN NUMBERS

function swap(a, b) {
    var c = b;
	b = a;
	a = c;
	return [a, b]
}
swap(100,200)

//007 TOTAL NUMBER OF POINTS

function footballPoints(wins, draws, losses) {
	let win = 3 * wins;
    let draw = 1 * draws;
    let result= win + draw; 

    console.log(result);

}

footballPoints(1, 4, 3);
footballPoints(3, 3, 1);
footballPoints(2, 4, 6);

//008 TOTAL NUMBER OF LEGS

function animals(chickens, cows, pigs) {
	let chicken = 2 * chickens;
    let cow = 4 * cows;
    let pig = 4 * pigs;
    let total = chicken + cow + pig;
    return total;
}

animals(2, 3, 5) //➞ 36
animals(1, 2, 3) //➞ 22
animals(5, 2, 8) //➞ 50

//009 RETURN THE FIRST ELEMENT IN AN ARRAY

function getFirstValue(arr) {
	console.log(arr[0])
}

getFirstValue([1, 2, 3]) //➞ 1
getFirstValue([80, 5, 100]) //➞ 80
getFirstValue([-500, 0, 50]) //➞ -500

//010 BASKETBALL POINTS 

function points(twoPointers, threePointers) {
	let twoPoints = twoPointers * 2;
    let threePoints= threePointers * 3;
    let finalPoints = twoPoints + threePoints;
    console.log(finalPoints);
}

points(1, 1) //➞ 5
points(7, 5) //➞ 29
points(38, 8) //➞ 100

//011 ARE THE NUMBERS EQUAL?

function isSameNum(num1, num2) {
	if(num1 === num2) {return true} else {return false}
}

isSameNum(4, 8) //➞ false
isSameNum(2, 2) //➞  true
isSameNum(2, "2") //➞ false

 //012 AREA OF A TRIANGLE

 function triArea(base, height) {
	let area = base * height / 2;
    console.log(area);
}

triArea(3, 2) //➞ 3
triArea(7, 4) //➞ 14
triArea(10, 10) //➞ 50

//013 BASIC VARIABLE ASSIGNMENT

function nameString(name){
	var b = " Edabit";
	var result = name + b;
  	return result
}

nameString("Mubashir") //➞ "MubashirEdabit"
nameString("Matt") //➞ "MattEdabit"
nameString("javaScript") //➞ "javaScriptEdabit"

//014 SUM OF POLYGON ANGLES

function sumPolygon(n) {
	const polygon = (n -2) * 180;
    console.log(polygon)
}

sumPolygon(3) //➞ 180
sumPolygon(4) //➞ 360
sumPolygon(6) //➞ 720

//015 POWER CALCULATOR 

function circuitPower(voltage, current) {
	const power = voltage * current;
    console.log(power)
}

circuitPower(230, 10) //➞ 2300
circuitPower(110, 3) //➞ 330
circuitPower(480, 20) //➞ 9600