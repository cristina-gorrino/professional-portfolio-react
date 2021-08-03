import React from 'react';
import Project from '../Project';
import recipeRoulette from "../../assets/images/recipe-roulette.png"

const examples = [
    {
        id: 1,
        name: "Project 2 - Recipe Roulette",
        github: "https://cristina-gorrino.github.io/recipe-roulette/",
        deployed: "https://github.com/cristina-gorrino/recipe-roulette",
        image: recipeRoulette,
        alt: "screenshot of recipe roulette app"

    }
]

export default function Portfolio ({id, name, github, deployed, image}) {
    return (
        <div>
            <h3>Portfolio coming soon!</h3>
            {examples.map((project) => (
                <Project key={project.id} name={project.name} github={project.github} deployed={project.deployed} image={project.image} alt={project.alt} />
            ))}
            
        </div>
    )
}