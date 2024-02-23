
import './App.css';

import Register from './components/features/register/Register';
import Education from './components/features/education/Education';
import Contact from './components/features/contact/contact';
import About from './components/features/about/about';


function App() {
  return (
    <div>
     <Register/>
     <Education/>
     <About/>
     <Contact/>
    </div>
  );
}


export default App;
