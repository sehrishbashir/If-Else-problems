/*pseudocode
Agr bank account m kamas kam Rs. 1000000 hain,
toh kaho "Congratulations! You are a millionaire"
warna kaho "I'm sorry, you are not a millionaire"

let myAmount = 4000000;
if (myAmount > 1000000) {
    alert("Congratulations! You are a millionaire");
} else{
    alert("I'm sorry, you are not a millionaire");
}*/


/*Pseudocode
Agr car electric hai,
toh matlab Tesla company ne banai hai
warna Tesla ne nahi banai
 
let isElectric = true;
if (isElectric){
    alert("manufacture by Tesla");
} else{
    alert("it is not manufacture by Tesla");
}*/


/*pseudocode
Agr abhi wala score puranay high score se zyada hai,
toh kaho "Congratulations!! Your new high score is <user's high score>"
warna kaho "Try Again. You just need <the number of more points needed 
to beat the high score> to win!"

let highScore = 20;
let currentScore = 5;
let needScore = highScore - currentScore;
if (highScore <= currentScore) {
    alert( "Congratulations!! Your new high score is" + currentScore);
} else {
    alert( "Try Again. You just need " + needScore);
}*/


/*pseudocode
Agr number even hai (matlab 2 se divide karne p iss ka remainder zero hai),
toh kaho "This is EVEN"
warna kaho "This is ODD"

let x = 9;
if (x % 2 === 0) {
    alert("This is EVEN");
} else{
    alert("This is ODD");
}*/


/*pseudocode
If the user has less than Rs. 1 balance, the program prints Moazziz Sarif,
aap ka mojooda balance iss call k lye naa kaafi hai. Please re-charge karain 
If the user has Rs. 1 to 10, it prints Moazziz sarif, aap ka balance khatam honay 
wala hai , and then prints Ring Ring!!. If the user has greater than Rs. 10 balance,
the program prints Ring Ring.

let balance = 15;
if (balance < 1){
    alert("Moazziz Sarif,aap ka mojooda balance iss call k lye naa kaafi hai.")
}

if (balance >= 1 && balance <= 10){
     alert("Moazziz sarif, aap ka balance khatam honay wala hai");
}

if (balance > 10) {
     alert(" Ring Ring!!")
}

                  OR

if (balance < 1){
    alert("Moazziz Sarif,aap ka mojooda balance iss call k lye naa kaafi hai.")               
}
else if (balance <= 10){
     alert("Moazziz sarif, aap ka balance khatam honay wala hai");
}else{
     alert(" Ring Ring!!");
}*/


/*pseudocode
TechKaro admission test is designed to admit all students who meet at least one
of the following criteria:

Has scored more than 10 points in Math test
Has scored more than 20 points in Computer test
Has scored more than 8 points in English test Write a program that 
checks a student's marks and tells if he has passed the admission test or not.

let math = 1;
let english = 2;
let computer = 3;
if (math > 10 || english > 20 || computer > 8){
    alert("passed");
} else{
    alert("failed");
}*/


/*pseudocode
 TechKaro admission test is designed to admit all students who meet all of the 
 following criteria:

Has scored more than 10 points in Math test
Has scored more than 20 points in Computer test
Has scored more than 8 points in English test Write a program that checks a 
student's marks and declares if he has passed the admission test or not

let math = 11;
let english = 21;
let computer = 10;
if (math > 10 && english > 20 && computer > 8){
    alert("passed");
} else{
    alert("failed");
}*/





            /*PRACTICE D2*/


           /*Problem-1
pseudocode
. An apple costs Rs. 10. A mango costs Rs. 15. A banana costs Rs. 8.

Ali has Rs. 100 only and wants to buy fruits for Fruit Chaat for Iftaar.

Write a program that:

Uses a variable noOfApples to store the number of apples Ali wants to buy.
Uses a variable noOfMangoes to store the number of mangoes Ali wants to buy.
Uses a variable noOfBananas to store the number of bananas Ali wants to buy.
The program should tell Ali if he has enough money to purchase the no.
of fruits he wants. For example, it prints Shopping SUCCESS!! 
if he wants to buy 1 apple, 3 mango and 2 bananas 
(total cost = 1 * 10 + 3 * 15 + 2 * 8 = Rs. 71). 
But, it prints Shopping FAILED! Not enough money 
if he wants to buy 4 apples, 5 mangoes and 3 bananas
(total cost = 4 * 10 + 5 * 15 + 3 * 8 = Rs. 139).*/


const costOfApple = 10;
const costOfMango = 15;
const costOfBanana = 8;

const aliBalance = 100;

let noOfApple = 1;
let noOfMango = 3;
let noOfBanana = 2;

let totalCost = noOfApple  * costOfApple + 
                noOfMango  * costOfMango + 
                noOfBanana * costOfBanana;

if (totalCost <= aliBalance){
    alert(" Shopping SUCESSFULLY!");
} else{
    alert("Shopping FAILED! Not enough money ");
}








