const { faker }= require("@faker-js/faker");
const mysql=require("mysql2");

const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"delta_app",
    password:"srinjoy31"
});

let q="INSERT INTO user(id,username,email,password) VALUES ?";
//Replace placeholders with the array values
let user=[
  ["123a","aryaa","arya@gmail.coma","abcda"],
  ["123b","aryab","arya@gmail.comb","abcdb"],
];

try{
  connection.query(q,[user],(err,result)=>{
    if(err) throw err;
    console.log(result);
  });
}catch(err){
  console.log(err);
}
connection.end();//To end the connection

let getRandomUser=()=> {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}
console.log(getRandomUser());