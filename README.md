1. What is javaScript ?

2. What is Javascript engine ?

3. what is tdz ?

4. Differnce between var ,let and const ?

5. 5 type of error


// day 2

what is arrow functions ?

What is Anonymous Functions

What is IIFE

What are High Order Functions

What is First Class Functions

What is Function Expresssions

// day 3


What is the difference between filter and find, map and forEach, some and every

What is Prototype and Prototype Chaining

What is Call apply bind method

window object v/s document object ?

Difference between Splice and slice ? 

What is Execution Conext ? 



//day 4

What are callbacks and why do we use it
a function that is passed to another function as a parameter is a callback function.


Can you explain why we use async-await
What are Promises and why do we need them?
Difference between ES5 and ES6
Explain the difference setTimeout and setInterval function and write its syntax
Explain promise and call back hell
Event loop


// day 5

generator function 

closures

function currying





1. What is javaScript ?

single threded

sychronous

dynamic - data types of the variable can be change during the runtime

Javascript is scripting language that enables you to create dynamically updating content,control multimedia ,animate image etc.

---

2. What is Javascript engine ?

js engines - is a software program is used excutes js code,all browser has differnt engines

v8 is most popular one

chakra

spider monkey

whole process is known as interpreter

---

3. what is tdz ?

<!-- cration of variables and declaration is known as tdz. -->
it is created at starting of block and ends at when variable is declared 

---

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

---

5.  5 type of error

reference - trying to access variable
syntax - incorrect syntax
type - spelling,keywords
runtime - incorrect syntax
load time error - js intrnal error

---

6. What is typeOf operator?

typeOf operator is gives us data type of given value(returns string).

it can be literal,variable,function or an object

typeOf array is object.

---

7. What is the difference between == && ===

== and === are comparison operator
returns boolean value

== checks for values only and ignores datatype

and === check for value and datatype as well.

---

8. What is the difference between undefined, NaN and null ?

undefined - is when we declared a variable in the code but did not assign the value before printing the variable value

NaN - is a property
JavaScript returns this value when the Number we’re supposed to get isn’t a number. ex : 3 / 'a' = NaN

null - it is primitive datatype. it is an indication of intentional absense of data.

---

9. What is Functions ?

Functions are one of the building blocks of JavaScript

A JavaScript function is a block of code designed to perform a particular task.

//it is a fundamental block of javaScript

to use it we have to call/invoke it with ()

---

10. What is Pure Functions ?

when a same input is passed every time, the function will return same output for everytime.

function add(a,b){ // parameters

    console.log(a+b)

}

add (1,2) // 3 // argument

---

11. What is Callback Functions ?

A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished

example :

function greet(){
console.log("HI");
}
setTimeout(greet,1000)

---

12. What is hoisting ?

hoisting is a phenomenon is JavaScript where interpreter appears moved to top.

13. what is arrow functions ?

Arrow function is one of the features introduced in ES6 version of JavaScript.
It allows you to create functions in a cleaner way compared to regular functions.
There is no need to use function keyword in Arrow function.
It is anonymous function which is assign to a variable.
For only one argument there is no need of to paranthesis in Arrow Function.
And for only one statement no need of return and write inside of curly brackets '{ }'
"this" keyword is act differently in Arrow function than normal function.
In normal function "this" refers to object where it is called but in Arrow function "this" refers to parent scope.
If there is no parent scope then it refers to Global Scope which is window object.

'arguments' keyword shows is not defined.

14. What is Anonymous Functions
    A function which has no name .
    anonymous function is assign to a variable.
    Passing an anonymous function to other function as its argument
    like setTimeout

example :
let x = function () {  
 console.log('It is an anonymous function');  
};  
x();

15. What is IIFE

immidietly invoking function expression

(function(){
console.log('hi')
})()

use of IIFE : to prevent the function and variable from polluting the gloal object.




16. What are High Order Functions ?
    a function which takes a function as an argument or returns a function

example :

function add(a,b){
return a+b
}
function prod(a,b){
return a*b
}

function calculate(a,b,logic){
return logic(a,b)
}

console.log(calculate(2,3,add))
console.log(calculate(2,3,prod))

example 2 : for returning a function 

function greet (){
    return function(){
console.log('hi')
    }
}

const sayHi = greet()

sayHi()

17. What is First Class Functions ?

if a function is treated like a variable it is known as first class function

1.function can be assign to a variable.
2.function can be passed as argument
3.function can be return as from another function

    example :
      const greet = function sayHi(){
      console.log("HI");

}
// sayHi()
greet()

18. What is Function Expresssions

a function assigning to a variable.

it is not hoisted

 const greet = function (){
      console.log("HI");
}
greet();

19. What is the difference between filter and find. 

- filter() Method Get every element in the array apply given condition to them.
- find() returns the value of the first element in an array that passes a test

20.  map and forEach 
- map() method iterate over whole array and creates a new array
- The forEach() method executes a provided function once for each array element and does not create a new array.

- map() method return new array so we caan apply method chaining.
- forEach() doesn't retuns array so it is not chainable. 



example : const array = [1,2,3,4,5]

array.forEach((a)=> console.log(a+1)) 

console.log(array) // [1,2,3,4,5] 

const addOne = array.map((a)=> a+1 )

console.log(addOne) // [2, 3, 4, 5, 6]

21.  some and every 
returns boolean value

- The main difference between the mentioned methods is that the some() method is used for finding at least one or more than one value in the array according to the passed condition, whereas the every() method checks whether all elements of an array are satisfying the given condition or not.

- every() method in JavaScript is used to check whether all elements of an array are satisfying the given condition or not.

- some() method is used for finding at least one or more than one value in the array according to the passed condition,

example :
let arr = [1,2,3,4,5]

let newArr = arr.every((a)=>(a>0)) 

let newArr = arr.some((a)=>(a > 4))

console.log(newArr)

22. What is Prototype and Prototype Chaining

- Prototypes are the means of inheritance in JavaScript. 

prototype is an object which is derived from another object


- The prototype of an object would also have a prototype object. 
- This continues until we reach the top level when there is no prototype object i.e null

This is called prototype chaining or prototype chain in JavaScript.

example : 
let obj1 = {
  name: "BEN",
  age: 10,
  country: "INDIA",
};

let obj2 = {
  name: "Ross",
  age: 11,
 __proto__ : obj1
};

console.log(obj2.hasOwnProperty("country"))


23. What is Call apply bind method

different ways of invoking/calling a function

call - in case of call each and every argumnet which is required to be passed to the function  will be passed seperatly.

apply  - in case of apply each and every argumnet which is required to be passed to the function  will be passed as array.

bind - it returns a function

24. window object v/s document object 

both are present in browser

1. window it is top most object of herearchy of DOM in browser only

2. window is a part of BOM 

2. document object is part of DOM as well as BOM

3.window is an object of a browser
3.document is an object of a window


we access window only 

we acces document using window.document


25. Difference between Splice and slice

splice() method adds/or removes array elements.
splice will change original array

arr.splice(index,delete,add)

it retuns deleted elements

The slice() method returns SELECTED ELEMETS in an array, as a new array.

The slice() method selects from a given start, up to a (not inclusive) given end.

The slice() method does not change the original array.

arr.slice(start,end(exclusive))



26.  What is Execution Context ? 

1. everything in js is excuted in global excution context
2. first this GEC is pushed to call stack
3. then GEC is excuted
4. it has two parts i.e memory creation and code excution 





27. What are callbacks and why do we use it

a function that is passed to another function as a parameter is a callback function.

In JavaScript, the way to create a callback function is to pass it as a parameter to another function, and then to call it back right after something has happened or some task is completed.

28. Can you explain why we use async-await

Async: It simply allows us to write promises based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event-loop. Async functions will always return a value. It makes sure that a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value.

Await: Await function is used to wait for the promise. It could be used within the async block only. It makes the code wait until the promise returns a result. It only makes the async block wait.

const getData = async() => {
	var y = await "Hello World";
	console.log(y);
}

console.log(1);
getData();
console.log(2);


29. What are Promises and why do we need them?

Promises are used to handle asynchronous operations in JavaScript.
 They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code. 
 promises are the ideal choice for handling multiple callbacks at the same time, thus avoiding the undesired callback hell situation. 

 A Promise has four states: 
 
fulfilled: Action related to the promise succeeded
rejected: Action related to the promise failed
pending: Promise is still pending i.e. not fulfilled or rejected yet
settled: Promise has fulfilled or rejected


30. Difference between ES5 and ES6

31. Explain the difference setTimeout and setInterval function and write its syntax


let count = 0;
  
const intervalId = setInterval(() => {
  console.log('HELLO GEEK');
  count++;
  
  if (count === 5) {
    console.log('Clearing the interval id after 5 executions');
    clearInterval(intervalId);
  }

32. Explain promise and call back hell

33. Event loop4


Function currying : Currying is a process in functional programing which can transform a function with multiple argument into single argument and a funtion returning multiple functions.

WeakSet  : it 

new WeakSet([iterable]);

WeakSet it is used to store a collection of weak (weak references) held objects .The syntax would be as follows,

new WeakSet 