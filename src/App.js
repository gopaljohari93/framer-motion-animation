import logo from './logo.svg';
import './App.css';
import FramerAnimation from './components/FramerAnimation';
import ExitEnterAnimation from './components/ExitEnterAnimation';
import DragAnimation from './components/DragAnimation';
import HoverandClickAnimation from './components/HoverandClickAnimation';
import ReactScrollAnimations from './components/ReactScrollAnimations';
import ScrollAnimationTrigger from './ScrollAnimationTrigger';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Navbar from './components/pages/Navbar';
import Services from './components/pages/Services';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/services' element={<Services />}></Route>
            <Route path='/portfolio' element={<Portfolio />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
      </BrowserRouter>

      <div className="App">
        {/* <h1>Framer Motion Animation in React</h1> */}

        {/* components */}
        {/* <FramerAnimation /> */}
        {/* <ExitEnterAnimation /> */}
        {/* <DragAnimation /> */}
        {/* <HoverandClickAnimation /> */}
        {/* <ReactScrollAnimations /> */}
        {/* <ScrollAnimationTrigger /> */}

      </div>
    </>
  );
}

export default App;
