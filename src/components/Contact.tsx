import { LayoutDiv, PageContainer, PageHeader } from "../GlobalStyle";
import styled from 'styled-components'

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    font-size: 2rem;
`;

const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

const FormInput = styled.input`
    font-size: 1rem;
    padding: 1rem;
    background-color: white;
    border-radius: 1rem;
    border: none;
`;

const FormTextArea = styled.textarea`
    height: rem;
    font-size: 1.5rem;
    padding: 1.5rem;
    background-color: white;
    border-radius: 1rem;
    border: none;
`;

const FormButton = styled.button`
    font-size: 1.5rem;
    padding: 1rem;
    border-radius: 1rem;
    background-color: rgb(179, 19, 18);
    color: white;
    border: none;
    &:hover {
        background-color: rgb(43, 42, 76);
        color: white;
    }
`;

const Contact = () => {
    return (
        <LayoutDiv>
            <PageContainer>
                <PageHeader>Contact Me!</PageHeader>
                <ContactForm action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value="a5151c3f-6b81-4fd0-ad47-9b45e70d5099"></input>
                    <input type="hidden" name="redirect" value="https://www.scotthall.dev/"></input>
                    <InputDiv>
                        <label htmlFor="name">Name</label>
                        <FormInput type="text" name="name" required />
                    </InputDiv>
                    <InputDiv>
                        <label htmlFor="email">Email</label>
                        <FormInput type="email" name="email" required />
                    </InputDiv>
                    <InputDiv>
                        <label htmlFor="message">Message</label>
                        <FormTextArea name="message"></FormTextArea>
                    </InputDiv>
                    <FormButton type="submit">Submit</FormButton>
                </ContactForm>
            </PageContainer>
        </LayoutDiv>
    )
  };
  
  export default Contact;