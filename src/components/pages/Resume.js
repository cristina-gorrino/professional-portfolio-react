import React from 'react';
import resume from '../../assets/Cristina Gorrino_Resume 2021.pdf';

const styles = {
    cardStyle: {
        width: "18rem"
    }
}

export default function Resume() {
    return (
        <div>
            <h3>Experience and Skills</h3>
            <p>Click here to download my full <a href={resume} rel="noreferrer" download="Cristina Gorrino Resume" target="_blank">Resume</a></p>
            <div className="card-container">
            <div className="card" style={styles.cardStyle}>
                <div className="card-header">
                    <h4>Proficiencies</h4>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">JavaScript</li>
                    <li className="list-group-item">Node and Express</li>
                    <li className="list-group-item">MySQL</li>
                    <li className="list-group-item">React</li>
                    <li className="list-group-item">MongoDB</li>
                    <li className="list-group-item">Mongoose</li>
                </ul>
            </div>
            </div>
            
            
        </div>
    )
}