import styled from "styled-components";
import { LayoutDiv, PageContainer, PageHeader } from "../GlobalStyle";

const StyledH2 = styled.h2`
  font-size: 3rem;
  text-shadow: 1px 1px rgb(234, 144, 108);
`;

const StyledH3 = styled.h3`
  font-size: 2rem;
  text-decoration: underline;
`;

const StyledLogo = styled.img`
  padding: .5rem;
  margin: .5rem;
  border-radius: 1rem;
`;

const AboutSection = styled.div`
  background-color: white;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;



const About = () => {
    return (
      <LayoutDiv>
        <PageContainer>
          <PageHeader>About Me</PageHeader>
          <p>Hi! My name is <u>Scott</u>. I am a self-taught full stack developer with a background in finance and accounting. Most recently, I was employed as a financial analyst II creating and delivering artist statements in the music industry. I became interested in progamming because it provides the ability to create and design things.</p>
          <p>Self-taught through: <a href="https://www.theodinproject.com/" ><i>the Odin Project</i></a>, <a href="https://fullstackopen.com/en/" ><i>FullStackopen</i></a>, and hours of googling.</p>
          <AboutSection>
            <StyledH2>Technical Skills</StyledH2>
            <StyledH3>Front</StyledH3>
            <div>
              <StyledLogo height="96" width="96" src="https://cdn.simpleicons.org/html5" />
              <StyledLogo height="96" width="96" src="https://cdn.simpleicons.org/css3" />
              <StyledLogo height="96" width="96" src="https://cdn.simpleicons.org/javascript" />
              <StyledLogo height="96" width="96" src="https://cdn.simpleicons.org/react" />
              <StyledLogo height="96" width="96" src="https://cdn.simpleicons.org/redux" />
              <StyledLogo height="96" width="96" src="https://cdn.simpleicons.org/sass" />
              <StyledLogo height="96" width="96" src="https://cdn.simpleicons.org/jest" />
              <StyledLogo height="96" width="96" src="https://cdn.simpleicons.org/typescript" />
              <StyledLogo height="96" width="96" src="https://cdn.simpleicons.org/styledcomponents" />
            </div>
            <StyledH3>Back</StyledH3>
            <div>
              <StyledLogo height="96" width="96" src="https://cdn.simpleicons.org/nodedotjs" />
              <StyledLogo height="96" width="96" src="https://cdn.simpleicons.org/express" />
              <StyledLogo height="96" width="96" src="https://cdn.simpleicons.org/mongodb" />
              <StyledLogo height="96" width="96" src="https://cdn.simpleicons.org/mongoose" />
            </div>
            <StyledH3>Misc</StyledH3>
            <div>
              <StyledLogo height="96" width="96" src="https://cdn.simpleicons.org/npm" />
              <StyledLogo height="96" width="96" src="https://cdn.simpleicons.org/webpack" />
              <StyledLogo height="96" width="96" src="https://cdn.simpleicons.org/git" />
              <StyledLogo height="96" width="96" src="https://cdn.simpleicons.org/github" />
              <StyledLogo height="96" width="96" src="https://cdn.simpleicons.org/cypress" />
              <StyledLogo height="96" width="96" src="https://cdn.simpleicons.org/postman" />
              <StyledLogo height="96" width="96" src="https://cdn.simpleicons.org/microsoftexcel" />
            </div>
          </AboutSection>
          <StyledH2>Things I Like Outside of Work</StyledH2>
          <ul>
            <li>Weightlifting,Yoga, & Running</li>
            <li>Coffee</li>
            <li>Cooking</li>
            <li>Reading (currently reading: LOTR & The Pacific Crucible)</li>
            <li>the Tennessee Titans</li>
            <li>Mid Century Design</li>
            <li>Casio Watches</li>
          </ul>
        </PageContainer>
      </LayoutDiv>
    );
  };
  
  export default About;