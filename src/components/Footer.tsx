import { styled } from 'styled-components'

const FooterDiv = styled.footer`
  display: flex;
  justify-content: space-evenly;
  max-width: 100%;
  padding: 1rem;
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
    transform: scale(1.1)
  }
`;

const ImageLink = styled.img`
  height: 32px;
  width: auto;
`;

const Footer = () => {
    return (
      <FooterDiv>
        <p>scotthall.dev</p>
        <PersonalLinks>
            <StyledLink href="https://github.com/scott-hall7" target="_blank" rel="noopener noreferrer">
                <ImageLink src="https://cdn.simpleicons.org/github/white" alt="link to personal github"/>
            </StyledLink>
            <StyledLink href="https://www.linkedin.com/in/scott-hall-5b5189130/" target="_blank" rel="noopener noreferrer">
                <ImageLink src="https://cdn.simpleicons.org/linkedin/white" alt="link to personal linkedin" />
            </StyledLink >
        </PersonalLinks>
      </FooterDiv>
    )
}

export default Footer;