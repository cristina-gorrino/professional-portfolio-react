import React from 'react';
import resume from '../assets/Cristina Gorrino_Resume 2021.pdf';


export default function Footer() {
    return (
        <footer id='contact'>
                <h2>Contact Me</h2>
                <ul>
                    <li><a href="mailto:cgorrino03@gmail.com">Email: cgorrino03@gmail.com</a></li>
                    <li><a href="https://www.linkedin.com/in/cristina-gorrino-01355b172/">Linkedin</a></li>
                    <li><a href="https://github.com/cristina-gorrino">GitHub</a></li>
                    <li><a href="https://stackoverflow.com/users/15286907/cgorrino?tab=profile">Stack Overflow</a></li>
                    <li><a href={resume} rel="noreferrer" download="Cristina Gorrino Resume" target="_blank">Resume</a></li>
                </ul>
        </footer>
    )

}