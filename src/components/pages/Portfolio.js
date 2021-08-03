import React from 'react';
import Project from '../Project';
import mealsEasy from "../../assets/images/meals-easy.png";
import recipeRoulette from "../../assets/images/recipe-roulette.png";
import weatherDash from "../../assets/images/weather-app.png";
import techBlog from "../../assets/images/tech-blog.png";
import noteTaker from "../../assets/images/note-taker.png";
import workoutTracker from "../../assets/images/workout-tracker.png";

const examples = [
    {
        id: 1,
        name: "Project 1 - Meals Easy",
        github: "https://github.com/cristina-gorrino/meals-easy",
        deployed: "https://meals-easy.herokuapp.com/",
        image: mealsEasy,
        alt: "screenshot of meals easy app"

    },
    {
        id: 2,
        name: "Project 2 - Recipe Roulette",
        github: "https://github.com/cristina-gorrino/recipe-roulette",
        deployed: "https://cristina-gorrino.github.io/recipe-roulette/",
        image: recipeRoulette,
        alt: "screenshot of recipe roulette app"

    },
    {
        id: 3,
        name: "Project 3 - Weather Dashboard",
        github: "https://github.com/cristina-gorrino/weather-dashboard-app",
        deployed: "https://cristina-gorrino.github.io/weather-dashboard-app/",
        image: weatherDash,
        alt: "screenshot of weather dashboard app"

    },
    {
        id: 4,
        name: "Project 4 - Tech Blog",
        github: "https://github.com/cristina-gorrino/tech-blog",
        deployed: "https://tech-blog-cg.herokuapp.com/",
        image: techBlog,
        alt: "screenshot of tech blog application"

    },
    {
        id: 5,
        name: "Project 5 - Note Taker",
        github: "https://github.com/cristina-gorrino/note-taker",
        deployed: "https://cgorrino-note-taker.herokuapp.com/",
        image: noteTaker,
        alt: "screenshot of tech blog application"

    },
    {
        id: 6,
        name: "Project 6 - Workout Tracker",
        github: "https://github.com/cristina-gorrino/workout-tracker",
        deployed: "https://whispering-spire-90822.herokuapp.com/",
        image: workoutTracker,
        alt: "screenshot of workout tracker application"

    }
]

export default function Portfolio ({id, name, github, deployed, image}) {
    return (
        <div>
            <h3>Project Portfolio</h3>
            <h4>I am happy to share these examples of my work. The gallery below shows projects where I have applied my web development skills.</h4>
            <p>Click on the image to go to the deployed application, the titles link to the GitHub repo of the project.</p>
            {examples.map((project) => (
                <Project key={project.id} name={project.name} github={project.github} deployed={project.deployed} image={project.image} alt={project.alt} />
            ))}
            
        </div>
    )
}