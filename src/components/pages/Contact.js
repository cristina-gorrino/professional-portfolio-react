import React from 'react';

export default function Contact() {
    return (
        <div>
            <h3>Get in contact</h3>
            <p>Please leave your contact details, and I'll get back to you</p>
            <form>
                <label for="conactName">Name:</label>
                <input type="text" id="contactName" name="contactName" required></input>
                <label for="contactEmail">Email:</label>
                <input type="email" id="contactEmail" name="contactEmail" required></input>
                <label for="message">Message:</label>
                <input type="textArea" id="message" name="message"></input>
                <button type="button" value="Submit"></button>
            </form>
        </div>
    )
}