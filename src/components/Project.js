import React from 'react';

export default function Project(props) {
    return (
        <div>
            <div class="card"> 
                <a href={props.github}><img class="small-project" src={props.image} alt={props.alt}/></a>
                <a href ={props.deployed}><h3 class="p2-label">{props.name}</h3></a>
            </div>

        </div>
    )
}