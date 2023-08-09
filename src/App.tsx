import Nav from './components/Nav'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NoPage from './components/NoPage';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <div>
        FOOTER
      </div>
    </div>
  );
};

export default App;