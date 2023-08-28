import { styled } from 'styled-components'

const StyledLogo = styled.img`
  height: 64px;
  width: auto;
  @media (max-width: 700px) {
    height: 32px;
  }
`;

const WhiteAboutSection = styled.div`
  background-color: white;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
`;

const StyledH2 = styled.h2`
  font-size: 3rem;
  text-shadow: 1px 1px rgb(234, 144, 108);
`;

const StyledH3 = styled.h3`
  font-size: 2rem;
  text-decoration: underline;
  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

const SkillSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const SkillContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
`;

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2px;
`;

const LogoText = styled.p`
    font-size: 16px;
    @media (max-width: 700px) {
        font-size: 12px;
    }
`;

const TechnicalSkills = () => {
  return (
    <WhiteAboutSection>
        <StyledH2>Technical Skills</StyledH2>
        <SkillSection >
            <StyledH3>Front</StyledH3>
            <SkillContainer>
                <LogoContainer>
                    <StyledLogo src="https://cdn.simpleicons.org/html5" />
                    <LogoText>HTML</LogoText>
                </LogoContainer>
                <LogoContainer>
                    <StyledLogo src="https://cdn.simpleicons.org/css3" />
                    <LogoText>CSS</LogoText>
                </LogoContainer>
                <LogoContainer>
                <StyledLogo src="https://cdn.simpleicons.org/javascript" />
                    <LogoText>Javascript</LogoText>
                </LogoContainer>
                <LogoContainer>
                    <StyledLogo src="https://cdn.simpleicons.org/react" />
                    <LogoText>React</LogoText>
                </LogoContainer>
                <LogoContainer>
                    <StyledLogo src="https://cdn.simpleicons.org/redux" />
                    <LogoText>Redux</LogoText>
                </LogoContainer>
                <LogoContainer>
                    <StyledLogo src="https://cdn.simpleicons.org/sass" />
                    <LogoText>Sass</LogoText>
                </LogoContainer>
                <LogoContainer>
                    <StyledLogo src="https://cdn.simpleicons.org/jest" />
                    <LogoText>Jest</LogoText>
                </LogoContainer>
                <LogoContainer>
                    <StyledLogo src="https://cdn.simpleicons.org/typescript" />
                    <LogoText>Typescript</LogoText>
                </LogoContainer>
                <LogoContainer>
                    <StyledLogo src="https://cdn.simpleicons.org/styledcomponents" />
                    <LogoText>Styled Components</LogoText>
                </LogoContainer>
            </SkillContainer>
            <StyledH3>Back</StyledH3>
            <SkillContainer>
                <LogoContainer>
                    <StyledLogo src="https://cdn.simpleicons.org/nodedotjs" />
                    <LogoText>Node.js</LogoText>
                </LogoContainer>
                <LogoContainer>
                    <StyledLogo src="https://cdn.simpleicons.org/express" />
                    <LogoText>Express</LogoText>
                </LogoContainer>
                <LogoContainer>
                    <StyledLogo src="https://cdn.simpleicons.org/mongodb" />
                    <LogoText>MongoDB</LogoText>
                </LogoContainer>
                <LogoContainer>
                    <StyledLogo src="https://cdn.simpleicons.org/mongoose" />
                    <LogoText>Mongoose</LogoText>
                </LogoContainer>
            </SkillContainer>
            <StyledH3>Misc</StyledH3>
            <SkillContainer>
                <LogoContainer>
                    <StyledLogo src="https://cdn.simpleicons.org/npm" />
                    <LogoText>npm</LogoText>
                </LogoContainer>
                <LogoContainer>
                    <StyledLogo src="https://cdn.simpleicons.org/webpack" />
                    <LogoText>Webpack</LogoText>
                </LogoContainer>
                <LogoContainer>
                    <StyledLogo src="https://cdn.simpleicons.org/git" />
                    <LogoText>Git</LogoText>
                </LogoContainer>
                <LogoContainer>
                    <StyledLogo src="https://cdn.simpleicons.org/github" />
                    <LogoText>GitHub</LogoText>
                </LogoContainer>
                <LogoContainer>
                    <StyledLogo src="https://cdn.simpleicons.org/cypress" />
                    <LogoText>Cypress</LogoText>
                </LogoContainer>
                <LogoContainer>
                    <StyledLogo src="https://cdn.simpleicons.org/postman" />
                    <LogoText>Postman</LogoText>
                </LogoContainer>
                <LogoContainer>
                    <StyledLogo src="https://cdn.simpleicons.org/microsoftexcel" />
                    <LogoText>Excel</LogoText>
                </LogoContainer>
            </SkillContainer>
        </SkillSection>
    </WhiteAboutSection>
  );
};
  
  export default TechnicalSkills;
