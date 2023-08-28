import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects'
import Contact from './components/Contact';
import NoPage from './components/NoPage';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer></Footer>
    </>
  );
};

export default App;