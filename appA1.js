                                                 //ASSIGNMENT NO 1 
// (ANS # 01)

let = "a";
let = "b";
a=prompt("Value A");
b=prompt("Value B");
if(a>b){
    console.log("Value A = ", a," is Greater than Value B = ", b);
    
}else if (a<b) {
    console.log("Value B = ", b," is Greater than Value A = ", a);}
    else{
        console.log("Value A = ", a, " is Equal to Value B =", b);
    }

// (ANS # 02)

let num = prompt("Enter a number: ");

if (num > 0) {
  alert("The number is positive");
} else if (num < 0) {
  alert("The number is negative");
} else {
  alert("The number is zero");
}

//(Ans # 03)

let num1 = prompt("Enter number 1: ");
let num2 = prompt("Enter number 2: ");
let num3 = prompt("Enter number 3: ");
let num4 = prompt("Enter number 4: ");
let num5 = prompt("Enter number 5: ");

let maxNum = Math.max(num1, num2, num3, num4, num5);

console.log("The largest number is: " + maxNum);

//(Ans # 04)

for(var i=0; i<=15; i++){
    if(i===0)
{
  console.log(i +" is even ");
}
else if(i%2===0)
{
    console.log(i+" is even");
}
else{
   console.log(i+ " is odd");
}
}

// //(Ans # 05)

let userMarks = +prompt("Enter your marks:");

if (userMarks < 100 && userMarks >= 90){
    console.log("your Grade is A")
} else if (userMarks < 90 && userMarks >= 80) {
    console.log("Your grade is B")
} else if (userMarks < 80 && userMarks >= 70) {
    console.log("Your grade is C")
} else if (userMarks < 70 && userMarks >= 60) {
    console.log("Your grade is D")
} else if (userMarks < 60 && userMarks >= 0) {
    console.log("Your grade is F")
} else {
    console.log("Enter valid marks")
}

// //(Ans # 06)

function fizzBuzz(num) {
    let numArr = [];

    for (let i = 1;i <= num; i++ ) {
        if( i % 3 == 0 && i % 5== 0) {
            numArr.push("FizzBuzz");
       } else if (i % 3 == 0) {
           numArr.push("Fizz");
       } else if (i % 5 == 0) {
           numArr.push("Buzz"); 
       } else {numArr.push(i)}
    }
    return numArr;
 }

 console.log(fizzBuzz(100));

// //(Ans # 07)

const numRows = 5;
for (let i = 0; i < numRows; i++) {
  let row = '';

  for (let j = 0; j <= i; j++) {
    row += '* ';
  }
  console.log(row);
}
