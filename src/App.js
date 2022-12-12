import {Routes, Route} from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
