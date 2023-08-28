import TechnicalSkills from "./TechnicalSkills";
import { styled } from "styled-components";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const resume = require('../Scott-Hall-Resume.pdf')
import { LayoutDiv, PageContainer, PageHeader } from "../GlobalStyle";

const StyledLink = styled.a`
  background-color: rgb(179, 19, 18);
  color: white;
  padding: 1rem;
  border-radius: 1rem;
  &:hover {
      background-color: rgb(43, 42, 76);
      color: white;
  }
`;

const About = () => {
    return (
      <LayoutDiv>
        <PageContainer>
          <PageHeader>About Me</PageHeader>
          <p>Hi! My name is <u>Scott</u>. I am a self-taught full stack developer with a background in finance and accounting. Most recently, I was employed as a financial analyst II creating and delivering artist statements in the music industry. I became interested in progamming because it provides the ability to create and design things.</p>
          <p>Self-taught through: <a href="https://www.theodinproject.com/" ><i>the Odin Project</i></a>, <a href="https://fullstackopen.com/en/" ><i>FullStackopen</i></a>, and hours of googling.</p>
          <TechnicalSkills />
          <p><b>Outside of work</b> I like to lift weights, run, and occasionally do yoga. I like good coffee, but I swear I am not addicted to it (probably am).</p>
          <p>I like to cook and my favorite thing to make is a chicken cutlet, but clean-up is a hassle. I like to read, but I am pretty inconsistent at it (currently reading: <i>LOTR</i> & <i>The Pacific Crucible)</i>.</p>
          <p>On Sundays, I will usually watch the Tennessee Titans play some mediocre football. I love Mid-century design and homes which I rarely talk about it.</p>
          <StyledLink href={resume} target="_blank" rel="noopener noreferrer">View my resume</StyledLink>
        </PageContainer>
      </LayoutDiv>
    );
  };
  
  export default About;