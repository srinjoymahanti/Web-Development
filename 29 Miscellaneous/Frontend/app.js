// let arr1=[1,2,3];
// let arr2=[1,2,3];
// arr1.sayHello=()=>{
//     console.log("Hello,I am arr");
// };

// arr1.__proto__.push=(n)=>{console.log("Hello pushing",n);}//chnaging the functionality of push 
// arr2.__proto__.pop=()=>{console.log("Thanks for popping");}//changing the prototype

// //Factory functions
// function Personmaker(name,age){
//     const person={
//         name:name,
//         age:age,
//         talk(){
//             console.log(`Hi,my name is ${this.name}`);
//         },
//     };
//     return person;
// }

// //Constructors->doesn't return anything and starts with capital
// function Person(name,age){
//     this.name=name;
//     this.age=age;
//     console.log(this);
// }
// Person.prototype.talk=function(){
//     console.log(`Hi my name is ${this.name}`);
// };
// let p1=new Person("adam",25);
// let p2=new Person("eve",25);
