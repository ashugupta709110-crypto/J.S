//object in js
// let obj = {
//     name: "Aashutosh",
//     age: 20,
//     branch: "ECE"
// };

// console.log(obj.name);   // Aashutosh
// console.log(obj.age);    // 20
// console.log(obj.branch); // ECE

// console.log(obj["name"]);   // Aashutosh
// console.log(obj["age"]);    // 20
// console.log(obj["branch"]); // ECE


// let id = Symbol("id");

// let obj = {
//     name: "Aashutosh",
//     [id]: 101
// };

// console.log(obj.name); // Aashutosh
// console.log(obj[id]);  // 101

// let JsUser = {
//     name: "Hitesh",
//     email: "hitesh@microsoft.com"
// };

// JsUser.changeName = function(newName) {
//     this.name = newName;
// };

// JsUser.changeName("Aashutosh");

// console.log(JsUser.name);


// let JsUser = {
//     name: "Hitesh",
//     email: "hitesh@microsoft.com"
// };

// JsUser.greeting = function() {
//     console.log("Hello JS user");
// };

// JsUser.greetingTwo = function() {
//     console.log(`Hello JS user, ${this.name}`);
// };

// JsUser.greeting();
// JsUser.greetingTwo();



// let obj1 = {
//     name: "Aashutosh"
// };

// let obj2 = {
//     age: 20
// };

// let obj3 = Object.assign({}, obj1, obj2);

// console.log(obj3);


// let obj1 = {
//     name: "Aashutosh",
//     age: 20
// };

// let obj2 = {
//     branch: "ECE",
//     college: "JNU"
// };

// let obj3 = { ...obj1, ...obj2 };

// console.log(obj3);


// let arr = [
//     { name: "Aashutosh", age: 20 },
//     { name: "Hitesh", age: 21 }
// ];

// console.log(Object.keys(arr[0]));
// // ["name", "age"]

// console.log(Object.values(arr[0]));
// // ["Aashutosh", 20]

// console.log(Object.entries(arr[0]));
// // [["name", "Aashutosh"], ["age", 20]]


// let obj = {
//     name: "Aashutosh",
//     age: 20,
//     branch: "ECE"
// };
// let name = obj.name;
// let age = obj.age;

// console.log(name); // Aashutosh
// console.log(age);  // 20
//Destructuring method:
// let { name, age } = obj;
// console.log(name); // Aashutosh
// console.log(age);  // 20


// let obj = {
//     name: "Aashutosh",
//     age: 20
// };

// let { name: username, age } = obj;

// console.log(username); // Aashutosh
// console.log(age);      // 20
