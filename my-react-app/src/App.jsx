import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Food from './Food.jsx';
import Card from './Card.jsx';
import Button from './Button.jsx';
import Student from './Student.jsx';

// function App() {
//   return(
//     <>
//     <Header></Header>
//     <Food></Food>
//     <Footer></Footer>
//     </>
    
//   )
// }

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

function App(){
  return(
    <>
    <Student name="Arya" age="21" isStudent={true} />
    <Student />
    </>
  );
};

export default App