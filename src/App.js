import "./App.css";
import Header from "./Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Blogs from "./Pages/Blogs/Blogs"
import AboutMe from "./Pages/AboutMe/AboutMe";
import Signup from "./Pages/Signup/Signup";
import Footer from "./Shared/Footer/Footer";
import Login from "./Pages/Login/Login/Login";
import NotFound from "./Shared/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/about-me" element={<AboutMe/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
