// const add =(a,b)=>{
//     return a+b
// }

// function calc(a,b,logic){
//     return logic(a,b)

// }

// console.log(calc(2,4,add))

// const array = [1,2,3,4,,null,5]

// array.forEach((a)=> console.log(a+1))

// console.log(array) // [1,2,3,4,empty,null,5]

// const addOne = array.map((a)=> a+1 )

// console.log(addOne) // [2, 3, 4, 5,empty,1,6]

// let arr = [1,2,3,4,5]
// let newArr = arr.every((a)=>(a>0))
// // let newArr = arr.some((a)=>(a > 4))

// console.log(newArr)

// let obj1 = {
//   name: "BEN",
//   age: 10,
//   country: "INDIA",
// };

// let obj2 = {
//   name: "Ross",
//   age: 11,
//  __proto__ : obj1
// };

// console.log(obj2.hasOwnProperty("country"))

// var arr = [1,2,3,4,5]
// arr.forEach((x)=>{if(x>2){
// console.log(x+1)
// }})

// var a = 1;
// const ab = () => {
//   var b = 2;
//   console.log(a);
// };

// ab();

// console.log(a);
// console.log(b);

// function  * numGenerator (){
//     yield "string"
//     yield 2
// }

// const generate

// const carWeakSet = new WeakSet();

// const car1 = {
//   maker: "BMW",
//   model: "GT",
// };
// const car2 = {
//   maker: "Honda",
//   model: "City",
// };

// carWeakSet.add(car1);
// console.log(carWeakSet);

// function remove() {
//   var str = "Javastring";

//   let str1 = str.slice(1);
//   console.log(str1);
// }

// remove();


// let a = 1
// let b = 2
// function outer (){
// function inner(){
// console.log(a)
// console.log(b)
// }
//  return inner
// }


// outer()()

// let obj1 = {
//     name: "BEN",
//     age: 10,
//     country: "INDIA",
//   };
  
//   let obj2 = {
//     name: "Ross",
//     age: 11,
//    __proto__ : obj1
//   };
  
//   console.log(obj2.hasOwnProperty("name"))

var arr = [1,2,3,4,5]

let arr1 = arr.slice(-3,1)

console.log(arr1)