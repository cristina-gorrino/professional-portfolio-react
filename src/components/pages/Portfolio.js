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
        alt: "screenshot of meals easy app",
        description: "An app where users can browse recipes and purchase all ingredients for fast and easy cooking at home. E-commerce app built with Node, Sequelize and Express."

    },
    {
        id: 2,
        name: "Project 2 - Recipe Roulette",
        github: "https://github.com/cristina-gorrino/recipe-roulette",
        deployed: "https://cristina-gorrino.github.io/recipe-roulette/",
        image: recipeRoulette,
        alt: "screenshot of recipe roulette app",
        description: "An app where users can use search or random selection to find recipes. Technologies used: JavaScript and the Edamam and Spoonacular APIs."

    },
    {
        id: 3,
        name: "Project 3 - Weather Dashboard",
        github: "https://github.com/cristina-gorrino/weather-dashboard-app",
        deployed: "https://cristina-gorrino.github.io/weather-dashboard-app/",
        image: weatherDash,
        alt: "screenshot of weather dashboard app",
        description: "Weather dashboard app allows user to search for current and upcoming weather data on specific cities. Past searches are saved for convenience. Uses Open Weather Map API."

    },
    {
        id: 4,
        name: "Project 4 - Tech Blog",
        github: "https://github.com/cristina-gorrino/tech-blog",
        deployed: "https://tech-blog-cg.herokuapp.com/",
        image: techBlog,
        alt: "screenshot of tech blog application",
        description: "An Express app that allows users to log in, make blog posts and comment on blog posts made by other users. Uses Sequelize to perform CRUD operations for this app."

    },
    {
        id: 5,
        name: "Project 5 - Note Taker",
        github: "https://github.com/cristina-gorrino/note-taker",
        deployed: "https://cgorrino-note-taker.herokuapp.com/",
        image: noteTaker,
        alt: "screenshot of tech blog application",
        description: "This application allows the user to create, read, and delete notes through a web interface. The user can click to add a new note and save it. Saved notes are displayed on the left column of the page where they can be accessed or deleted."

    },
    {
        id: 6,
        name: "Project 6 - Workout Tracker",
        github: "https://github.com/cristina-gorrino/workout-tracker",
        deployed: "https://whispering-spire-90822.herokuapp.com/",
        image: workoutTracker,
        alt: "screenshot of workout tracker application",
        description: "This application allows the user to track their workout, easily add multiple exercises to a workout on a given day and view recent workouts data on a graphical dashboard. Uses IndexedDB to preserve app functionality while offline."

    }
]

export default function Portfolio ({id, name, github, deployed, image}) {
    return (
        <div>
            <h3>Project Portfolio</h3>
            <h4>I am happy to share these examples of my work. The gallery below shows projects where I have applied my web development skills.</h4>
            <p>Click on the links below on each project to see the full deployed app, or to visit the GitHub repo.</p>
            {examples.map((project) => (
                <Project key={project.id} name={project.name} github={project.github} deployed={project.deployed} image={project.image} alt={project.alt} description={project.description} />
            ))}
            
        </div>
    )
}