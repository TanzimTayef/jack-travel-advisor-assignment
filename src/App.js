import "./App.css";
import Header from "./Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Blogs from "./Pages/Blogs/Blogs"
import AboutMe from "./Pages/AboutMe/AboutMe";
import Signup from "./Pages/Signup/Signup";
import Footer from "./Shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/about-me" element={<AboutMe/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
