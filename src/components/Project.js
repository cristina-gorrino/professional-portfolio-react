import React from 'react';

export default function Project(props) {
    return (
        <div>
            <div className="card"> 
                <a href={props.github}><img className="small-project" src={props.image} alt={props.alt}/></a>
                <a href ={props.deployed}><h3 className="p2-label">{props.name}</h3></a>
            </div>

        </div>
    )
}