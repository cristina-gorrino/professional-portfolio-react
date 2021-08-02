import React from 'react';

export default function Contact() {
    return (
        <div>
            <h3>Get in contact</h3>
            <p>Please leave your contact details, and I'll get back to you</p>
            <form className="mb-3">
                <label className="form-label" for="conactName">Name:</label>
                <input type="text" className="form-control" id="contactName" name="contactName" required></input>
                <label className="form-label" for="contactEmail">Email:</label>
                <input type="email" className="form-control" id="contactEmail" name="contactEmail" required></input>
                <label className="form-label" for="message">Message:</label>
                <input type="textArea" className="form-control" id="message" name="message"></input>
                <button type="submit" class="btn btn-primary">Submit</button>

            </form>
        </div>
    )
}