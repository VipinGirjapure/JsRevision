1.What is javaScript ?

2.What is Javascript engine ?

3. what is tdz ?

4. Differnce between var , let and const ?

5.  5 type of error


   
what is arrow functions ?

What is Anonymous Functions

What is IIFE

What are High Order Functions

What is First Class Functions

What is Function Expresssions








1.What is javaScript ?

single threded

sychronous

dynamic

Javascript is scripting language that enables you to create dynamically updating content,control multimedia ,animate image etc.

**********
2.What is Javascript engine ?

js engines - is a software  program is used excutes js code,all browser has differnt engines

v8 is most popular one

chakra 

spider monkey 


whole process is known as interpreter
*****
3. what is tdz ?

cration of variables and declaration is known as tdz.
*******
4. Differnce between var , let and const ?

var is global scope

let/const are local/block scope

var/let can declared without initialized

const can not declared without initialized

var can be reinitialized and redeclered
let can be reinitialized but can not be redeclered
const can not be reinitialized nor redeclered

var shows undefined while hoisting

let/const shows reference error for while hoisting
*********
5.  5 type of error

reference - trying to access variable
syntax - incorrect  syntax
type  - spelling,keywords
runtime - incorrect syntax
load time error - js intrnal error

********
6. What is typeOf operator?

typeOf operator is gives us data type of given value(returns string).

it can be literal,variablr,function or an object

typeOf array is object.
********
7. What is the difference between == && ===

== and === are comparison operator 
returns boolean value

== checks for values only and ignores datatype

and === check for value and datatype as well.
***********
8. What is the difference between undefined, NaN and null ?

undefined - is when we declared a variable in the code but did not assign the value before printing the variable value

//

NaN - is a property 
JavaScript returns this value when the Number we’re supposed to get isn’t a number. ex : 3 / 'a' = NaN

null - it is primitive datatype. it is a representation for empty value



9. What is Functions ?

//it is a fundamental block of  javaScript 

A JavaScript function is a block of code designed to perform a particular task.

to use it we have to call/invoke it with ()
******
10 . What is Pure Functions ?

 when a same input is passed every time, the function will return same output for everytime.

 function add(a,b){    // parameters

    console.log(a+b)
 }

 add (1,2) // 3  // argument


11. What is Callback Functions ?

A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished
 

 example :
 
  function add(a,b){

      return a+b
}

function maths(a,b,opration){
      return opration(a,b)
      
}

console.log(maths(1,2,add))

********

12. What is hoisting ?

hoisting is a phenomenon is JavaScript where interpreter appears moved to top.

what is arrow functions ?


Arrow function is one of the features introduced in ES6 version of JavaScript.
It allows you to create functions in a cleaner way compared to regular functions.
There is no need to use function keyword in Arrow function.
It is anonymous function which is asign to a variable.
For only one argument there is no need of to paranthesis in Arrow Function.
And for only one statement no need of return or curly brackets '{ }'
"this" keyword is act differently in Arrow function than normal function.
In normal function "this" refers to object where it is called but in Arrow function "this" refers to parent scope.
If there is no parent scope then it refers to Global Scope which is window object.

What is Anonymous Functions
 A function which has no name .
 anonymous function is assign to a variable.
Passing an anonymous function to other function as its argument
like setTimeout

 example : 
  let x = function () {  
    console.log('It is an anonymous function');  
};  
x();  

What is IIFE
What are High Order Functions
What is First Class Functions
What is Function Expresssions
