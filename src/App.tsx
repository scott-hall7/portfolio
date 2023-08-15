import Nav from './components/Nav';

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects'
import Contact from './components/Contact';
import NoPage from './components/NoPage';
import { Routes, Route } from "react-router-dom";
import { styled } from 'styled-components';

const StyledLogo = styled.img`
`;

const FooterDiv = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
  margin-top: auto;
  align-items: center;
  background-color: rgb(234, 144, 108);
  font-size: 2rem;
  color: white
`;

const PersonalLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center; 
  &:hover {
    transform: scale(1.05)
  }
`;


const Footer = () => {
  return (
    <FooterDiv>
      <p>scotthall.dev</p>
      <PersonalLinks>
        <StyledLink  href="https://github.com/scott-hall7"><StyledLogo height="24" width="24" src="https://cdn.simpleicons.org/github/white" alt="link to personal github"/></StyledLink >
        <StyledLink  href="https://www.linkedin.com/in/scott-hall-5b5189130/"><StyledLogo height="24" width="24" src="https://cdn.simpleicons.org/linkedin/white" alt="link to personal linkedin"/></StyledLink >
      </PersonalLinks>
    </FooterDiv>
  )
}

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