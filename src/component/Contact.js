import '../css/contact.css';

const Contact = () => { 
    return (
        <div id="AboutUsRoot1" className="AboutUsRoot1">
          <div id="Title1" className="Title1">
            Contact Us
          </div>
          <div className="Content">
            <div className="TextContainer">
              <div id="Heading" className="Heading">
                Get instant access
              </div>
              <div id="Body" className="Body">
                Reach out to us today to unlock the transformative power of AI for your financial strategies and gain unparalleled market insights.
              </div>
            </div>
            <form className="Form">
              <input
                id="EmailInput"
                className="EmailInput"
                placeholder="name@email.com"
                type="email"
              />
              <button
                id="SubmitButton"
                className="SubmitButton"
                type="submit"
              >
                Get Access
              </button>
            </form>
          </div>
        </div>
      );
};

export default Contact;