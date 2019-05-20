// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");

// var body = document.getElementById("gradient");

// function setGradient(){
// 	body.style.background = 
// 	"linear-gradient(to right, "
// 	+color1.value
// 	+","
// 	+color2.value
// 	+")";
// 	css.textContent = body.style.background +";"
// }

// const multiply = (a,b)=>a-b;
// debugger;
// const curriedMultiply = (a)=>(b)=> a - b;
// const multiplyBy5 = curriedMultiply(5); 
//arrays advance

// // normal array foreach
// const array =[1,2,10,16]
// const double =[]
// const newarray = array.forEach((num)=>{
// double.push(num*2);
// })
// console.log(double)

// // map filete , reduce


// // using map very less code
// const array =[1,2,10,16]
// const maoArray = array.map((num)=>{
// 	return num*3;
// })
// console.log(maoArray)

// // single line array
// const array =[1,2,10,16]
// const maoArray = array.map(num=>num *2); 

// filters
 // const array =[1,2,10,16]
 // const filterArray = array.filter(num => num > 5);
 // console.log(filterArray)
// or

 // const array =[1,2,10,16]
 // const filterArray = array.filter(num => num === 5);
 // console.log(filterArray)

// reduce

 const array =[1,2,10,16]
 const reduceArray = array.reduce((acc,num)=>{
 	return acc+num;
 },0);
console.log(reduceArray)

//  const array =[1,2,10,16]
//  const reduceArray = array.reduce((acc,num)=>{
//  	return acc+num;
//  },5); // starting no (5)
// console.log(reduceArray)

//****advance objects

// //1)  ***reference type
// var object1={value: 10 };
// var object2=object1;  // object 2 is refernce of object1
// var object3={value: 10 };

// //2)context     vs scope
// function(){
// 	let a =a;  // let with in brackets only its scope
// }
// // this means window  (this.alert("hello"))
// // example

// function a(){
// 	console.log(this);
// }
// //output : window {frame:window,postMessage:f....}
// // to run function 
// //  ****  window.a()
// const object4={
// 	a:function(){
// 		console.log(this);
// 	}
// }


//instantiation  ( making instances: multiple copys)

// class Player{
// 	constructor(name,type) {
// 		console.log('player',this);
// 		this.name=name;
// 		this.type=type;
// 	}
// 	introduce(){
// 		console.log(`Hi I am ${this.name}, I'am a ${this.type}`)
// 	}	
// }

// class Wizard extends Player {
// 	constructor(name,type){
// 		super(name,type)  // base class constractor
// 		console.log('Wizard',this);
// 	}
// 	play(){
// 		console.log(`weeeee I'm a ${this.type}`);
// 	}
// } 

// const wizard1 = new Wizard('shelly','healer');
// const wizard2 = new Wizard('shawn','Dark Magic');



//////////////////////////////////////////////////////////

//ES7....

// const pets=['cat','dog', 'bat']
// pets.includes('dog')   // true
// pets.includes('birds')  // false

// const Squre =(x)=>x**2

// const cube =(x)=>x**3

// //es8

// .padStart() //'kasi'.padstart(8) // output "    kasi"

// .padEnd()//'kasi'.padEnd(8) // output "kasi    "
 
// const fun=(a,b,c,d,)=>{
// 	console.log(a);
// }
// fun(1,2,3,4,) // output : 1

// Object.values
// Object.entries
// Object.keys

let obj4 = {
	username0:'Santa',
	username1: 'Rudolf',
	username2: 'Mr.grinch', 
}

Object.keys(obj4).forEach((key,index) => {
	console.log(key,obj4[key]);
})


Object.values(obj).forEach(value=>{
	console.log(value);
})


Object.entries(obj).forEach(value=>{
	console.log(value);
})

Object.entries(obj).map(value=>{
	return value[1] +value[0].replace('username','');
})


// color1.addEventListener("input",setGradient)

// color2.addEventListener("input",setGradient)

/////////////////////////////////////////////////////////
// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ddd = document.getElementById("kk");
// var ul = ddd.querySelector("ul");

// function inputlength() {
// 	return input.value.length;
// }
// function Createlistelements() {
// 	 var li = document.createElement("li");
// 	 li.appendChild(document.createTextNode(input.value));
// 	 ul.appendChild(li);
// 	 input.value=""
// }

// function addlistAfterClick() {
// 		if (inputlength()>0) {
// 		Createlistelements();
// 			}
// }
// function addlistKeypress(event) {
// 	if (inputlength()>0 && event.keyCode === 13) {
// 		Createlistelements();
// 		}	
// }
// button.addEventListener("click", addlistAfterClick)
// input.addEventListener("keypress", addlistKeypress)
////////////////////////////////////////////////////////

// button.addEventListener("click", function(){
// 		var li = document.createElement("li");
// 		li.appendChild(document.createTextNode(input.value))
// 		ul.appendChild(li)
// 		input.value=""
 	
// })

// input.addEventListener("keypress", function(event){
// 	if(input.value.length>0 && event.keyCode === 13 ){
// 		var li = document.createElement("li");
// 		li.appendChild(document.createTextNode(input.value))
// 		ul.appendChild(li)
// 		input.value=""
// 	}

// })



// var database = [
// {
// 	usename:"kasi",
// 	password:"reddy"
// },
// {
// 	usename:"kasi1",
// 	password:"reddy1"
// },
// {
// 	usename:"kasi2",
// 	password:"reddy2"
// },
// {
// 	usename:"kasi3",
// 	password:"reddy3"
// }
// ];

// var newFeed =[
// {
// 	usename:"boby",
// 	password:"so tired"
// },
// {
// 	usename:"sally",
// 	password:"javascript sooo cool"
// }
	
// ];


// function isuservalid(username,password){
// 	for(var i =0; i <database.length;i++){
// 	if (username===database[i].usename && password===database[i].password){
// 		return true;
// 		}
// 	} 
// 	return false;
// }

// function signin(user,pass){
// 	console.log(user  + pass )
// 	if(isuservalid(user,pass)){
// 		alert("user valid")
// 	} else {
// 		alert("sorry user invalid")
// 	}
// }
// var usernameprompt = prompt("what is your name?")
// var passwordprompt = prompt("what is your password?")

// signin(usernameprompt,passwordprompt); 

	// if (user===database[0].usename && pass===database[0].password){
	// console.log(newFeed);
	// } else {
	// 	alert("sorry please check usename");
	// }

// var todos =[
// 	"clean room",
// 	"brush Teeth",
// 	"Excercise",
// 	"Study javascript",
// 	"eat"
// ];
// var todos1 =[
// 	"clean room1",
// 	"brush Teeth1",
// 	"Excercise1",
// 	"Study javascript1",
// 	"eat1"
// ];
// var todolength = todos.length;
// function logtodos(todo,i){
// 	console.log(todo,i)
// }
// todos.forEach(logtodos);
// todos1.forEach(logtodos);



// it will give number at end of line
// todos.forEach(function (i, j){
// 	console.log(i,j);
// })


// todos.forEach(function (i){
// 	console.log(i);
// })


// var countertwo = 10
// do{
// 	console.log(countertwo)
// 	countertwo--
// }while (countertwo>0)

// var counterone = 10;
// while (counterone > 0){
// 	console.log(counterone);
// 	counterone--;
// }

// var counterone =0;
// while (counterone<10){
// 	console.log(counterone);
// 	counterone++;
// }
/*for (var i = 0; i <todos.length; i++) {
console.log(todos[i]);

}
*/
// var database = [
// {
// 	usename:"kasi",
// 	password:"reddy"
// }
// ];

// var newFeed =[
// {
// 	usename:"boby",
// 	password:"so tired"
// },
// {
// 	usename:"sally",
// 	password:"javascript sooo cool"
// }
	
// ];

// var usernameprompt = prompt("what is your name?")
// var passwordprompt = prompt("what is your password?")

// function signin(user,pass){
// 	if (user===database[0].usename && pass===database[0].password){
// 	console.log(newFeed);
// 	} else {
// 		alert("sorry please check usename");
// 	}

// }

// signin(usernameprompt,passwordprompt); 
// var user ={
// 	name:"john",
// 	age:34,
// 	hobby:"soccer",
// 	Ismarried:false,
// 	spells:["aaa","bbb"],
// 	shout:function() {
// 		console.log("object inside function");
// 	}
// };
// user.favouritefood ="spinach";
// user.Ismarried=true;


// console.log(user);
/*var list =["tiger","cat","bear","bird"];
console.log(list);
*//*
var list = ["tiger","cat","bear","bird"];
console.log(list[1]);
var mixedlist =["apple",3,true,function apple() {
	console.log("apples")
}];
console.log(mixedlist);
*/

/*function multiply(a, b){
if (a>10 || b>10) {
		return  "both more then 10";
	} else
	{
		return  "both less then 10";
	} 

}
alert(multiply(2, 3));
*/

/*function sing(song){
	console.log(song)
}
sing("sdfdsfds");
*/
/*function sing() {
	console.log("aaaaaaaaaaaaaa");
}
sing();
function sing2() {
	console.log("laa laaaaaaa laaaaaaaaaaaaa")
}

sing2();
*/
/*function sayHello() {
	alert("script file")
	console.log("Helloo");
}

// alert("script file")
// console.log("Helloo");

sayHello();
*/

/*var sayBye = function(){
	alert("script file")
	console.log("say bye");

}
sayBye();
*/