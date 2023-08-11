import Nav from './Nav'

const Contact = () => {
    return (
        <div>
            <form action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="a5151c3f-6b81-4fd0-ad47-9b45e70d5099"></input>
                <input type="hidden" name="redirect" value="google.com"></input>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" required />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" required />
                <label htmlFor="message">Message</label>
                <textarea name="message"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
  };
  
  export default Contact;