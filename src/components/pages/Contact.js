import React, {useState} from 'react';
import { validateEmail } from '../../utils/helpers';

const styles = {
    cardStyle: {
        width: "50rem"
    }
}

export default function Contact() {

    const [email, setEmail] = useState('');
    const [contactName, setContactName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        e.preventDefault();
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        // Based on the input type, we set the state of either email or contactName
        if (inputType === 'contactEmail') {
            setEmail(inputValue);
          if  (!validateEmail(email) ) {
            setErrorMessage('Email is invalid');
            return;
          } else {
            setErrorMessage('');
          }
          
        }
        if (inputType === 'contactName') {
            setContactName(inputValue);
          if  (!contactName) {
            setErrorMessage('Contact name is required');
          return;
        } else {
            setErrorMessage('');
        }
      };
    }
      const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
    
        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if  (!contactName) {
            setErrorMessage('Contact name is required');
        } else if  (!validateEmail(email) ) {
          setErrorMessage('Email is invalid');
          // We want to exit out of this code block if something is wrong so that the user can correct it
          return;
        }
    
        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setContactName('');
        setEmail('');
      };

    return (
        <div>
            <h3>Get in contact</h3>
            <p>Please leave your contact details, and I'll get back to you</p>
            <div className="card-container">
                <form className="mb-3 card" style={styles.cardStyle}>
                    <label className="form-label" htmlFor="conactName">Name:</label>
                    <input type="text" className="form-control" id="contactName" name="contactName" value={contactName} onChange={handleInputChange} required></input>
                    <label className="form-label" htmlFor="contactEmail">Email:</label>
                    <input type="email" className="form-control" id="contactEmail" name="contactEmail" value={email} onChange={handleInputChange} required></input>
                    <label className="form-label" htmlFor="message">Message:</label>
                    <input type="textArea" className="form-control" id="message" name="message"></input>
                    {errorMessage && (
                    <div>
                    <p className="error-text">{errorMessage}</p>
                    </div>
                    )}
                    <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                    <button type="submit" className="btn btn-light btn-lg px-4 me-md-2" onClick={handleFormSubmit}>Submit</button>
                    </div>
                </form>

            </div>

        </div>
    )
}