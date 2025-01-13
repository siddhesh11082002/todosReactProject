import logo from './logo.svg';
import './App.css';
import Headers from './MyComponent/Headers.js'
import Footer from './MyComponent/Footer.js';
import Todos from './MyComponent/Todos.js';


function App() {
  return (
   <>
    <Headers title = "My Todos List"/>
    <Todos/>
    <Footer/>
   </>
  );
}

export default App;
