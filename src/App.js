import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import About from "./Components/AboutMe/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import { themeContext } from "./Context";
import { useContext } from "react";
import { BrowserRouter,Routes,Route, Link } from "react-router-dom";
import GIT from "./Components/Get In Touch/GIT";
import All from "./Components/All/All";
function App() {
  const theme=useContext(themeContext)
  const darkMode=theme.state.darkMode;
  return (

    <BrowserRouter>
    {/* <Link to="/navbar">
    <button>Home</button>
    </Link> */}

    {/* <Navbar></Navbar> */}
    <Intro></Intro>
    {/* <About></About>
    <Skills></Skills>
    <Projects></Projects>
    <GIT></GIT> */}
    <Routes>
      <Route element={<All></All>} path="/all"></Route>
      <Route element={<About></About>} path="/about"></Route>
      <Route element={<Skills></Skills>} path="/skills"></Route>
      <Route element={<Projects></Projects>} path="/projects"></Route>
    {/* <Route element={<Navbar/>} path="/navbar"></Route>
      <Route element={<Intro></Intro>} path="/intro"></Route>
      <Route element={<About></About>} path="/about"></Route>
      <Route element={<Skills></Skills>} path="/skills"></Route>
      <Route element={<Projects></Projects>} path="/projects"></Route>
      <Route element={<GIT/>} path="/git"></Route> */}
    </Routes>
    </BrowserRouter>

    // <div className="App" style={{background:darkMode? "black":"", color: darkMode? "white":""}}>
      // <Navbar></Navbar>
      // <Intro></Intro>
      // <Services></Services>
      // <Experience></Experience>
      // <Works></Works>
      // <Portfolio></Portfolio>
      // <Testimonials></Testimonials>
      // <Contact></Contact>
      // <Footer></Footer>
    // </div>
  )
}

export default App;
