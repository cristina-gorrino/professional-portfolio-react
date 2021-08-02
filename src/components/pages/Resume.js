import React from 'react';
import resume from '../../assets/Cristina Gorrino Resume 2021.pdf';


export default function Resume() {
    return (
        <div>
            <h3>Experience and Skills</h3>
            <p>Click here to download my full <a href={resume} download="Cristina Gorrino Resume" target="_blank">Resume</a></p>
            <h4>Proficiencies</h4>
            <ul>
                <li>JavaScript</li>
                <li>Node and Express</li>
                <li>MySQL</li>
                <li>React</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
            </ul>
        </div>
    )
}