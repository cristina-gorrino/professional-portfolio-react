import React from 'react';

const styles = {
    cardStyle: {
        width: "25rem"
    }
}
export default function Project(props) {
    return (
        <div className='card-container'>


            <div className="card" style={styles.cardStyle}>
                <img src={props.image} className="card-img-top" alt={props.alt}/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href={props.deployed} target="_blank" rel="noreferrer" className="btn btn-light">Go to the app</a>
                    <a href={props.github} target="_blank" rel="noreferrer" className="btn btn-light">GitHub repo</a>
                </div>
            </div>

        </div>
    )
}