import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Blogs from './components/Blogs';
import About from './components/About';
import Home from './components/Home';
import Skills from './components/Skills';
import Footer from './components/footer.jsx';
import ScrollToTop from './components/scrolltoTop.jsx';
function App() {
    return (
      <>
      
      <Router>
      <ScrollToTop/>
        <Navbar />
        <div className="container my-4">
          <Routes>
            <Route exact path="Portfolio/projects" element={<Projects />}></Route>
            <Route exact path="Portfolio/home" element={<Home />}></Route>
            <Route exact path="Portfolio/" element={<Home />}></Route>
            <Route exact path="Portfolio/about" element={<About />}></Route>
            <Route exact path="Portfolio/skills" element={<Skills />}></Route>
            <Route exact path="Portfolio/blogs" element={<Blogs />}></Route>
  
            
          </Routes> 
        </div>
        <Footer/>
       </Router> 
    </>
    )
  }
export default App;

