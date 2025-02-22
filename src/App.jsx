import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './app.css'
import Header from "./pages/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import CarCategories from "./pages/CarCategories";
import CarDetail from "./pages/CarDetail ";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<CarCategories />} />
          <Route path="/details/:id" element={<CarDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
      </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
