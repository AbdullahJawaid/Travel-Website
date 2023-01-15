
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Signup from './pages/signup/Signup';

//style
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/about" element={<About/>}></Route>
      <Route exact path="/services" element={<Services/>}></Route>
      <Route exact path="/sign-up" element={<Signup/>}></Route>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
