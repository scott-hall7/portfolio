import Nav from './components/Nav';

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects'
import Contact from './components/Contact';
import NoPage from './components/NoPage';
import { Routes, Route } from "react-router-dom";

import styled from "styled-components";

const Main = styled.div`
  font-family: 'Work Sans';
`;

const App = () => {

  return (
    <Main>
      <Nav></Nav>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Main>
  );
};

export default App;