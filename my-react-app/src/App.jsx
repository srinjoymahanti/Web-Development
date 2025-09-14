import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Food from './Food.jsx';

import Card from './Card.jsx';

import Button from './Button.jsx';

import Student from './Student.jsx' 
   
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx';

function App() {
  return(
    <>
    <Header></Header>
    <Food></Food>
    <Footer></Footer>
    </>
    
  )
}

// function App(){
//   return(
//     <>
//     <Card/>
//     <Card/>
//     <Card/>
//     </>
    
//   );
// };

// function App(){
//   return(<Button/>)
// }

// function App(){
//   return(
//     <>
//     <Student name="Arya" age="30" isStudent={true} />
//     <Student />
//     </>
//   );
// }

// function App(){
//   return(
//     <>
//     <UserGreeting isLoggedIn={true} username="arya" />
//     <UserGreeting isLoggedIn={true} />
//     <UserGreeting />
//     </>
//   )
// };

// function App(){
//   const fruits=[
//         {id:1,name:"cherry",calories:40},
//         {id:2,name:"apple",calories:95},
//         {id:3,name:"banana",calories:45},
//         {id:4,name:"lime",calories:87},
//         {id:5,name:"berry",calories:75},
//     ];
//   const vegetables=[
//         {id:6,name:"carrot",calories:30},
//         {id:7,name:"potato",calories:25},
//         {id:8,name:"corn",calories:49},
//         {id:9,name:"onion",calories:97},
//         {id:10,name:"raddish",calories:74},
//     ];
//   return(
//     <>
//     {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
//     {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"/> : null}
//     </>
//   )
// };

export default App;