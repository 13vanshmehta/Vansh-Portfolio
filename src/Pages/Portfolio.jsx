import React from 'react';
import '../index.css';
import { NavLink } from "react-router-dom";
const projects = [
    {
        title: "Flappy Bird Game",
        image: "src/assets/Project Images/Flappy Bird Game.avif",
        description: "A bird game with a point system, the points are based on how many poles user passes. The game is developed using PyGames library in the python. The game has GUI.",
        link: "https://github.com/13vanshmehta/Flappy-Bird-Game",
    },

    {
        title: "Tic-Tac-Toe",
        image: "src/assets/Project Images/Tic-Tac-Toe.jpg",
        description: "A Tic-Tac-Toe game in Python is a classic project that involves creating a simple yet engaging game for two players. The game is played on a 3x3 grid where players take turns marking X or O in the empty squares. The goal is to place three of their marks in a horizontal, vertical, or diagonal row.",
        link: "https://replit.com/@VanshMehta4/x-and-0-Game?v=1",
    }, 

    {
        title: "Image Captioning Project",
        image: "src/assets/Project Images/Image Captioning Frontend.png",
        description: "A website for image captioning built using React JS which deliver a seamless and interactive user experience directly from the browser. It is employed to create a responsive and dynamic interface where users can upload images and receive captions.",
        link: "/portfolio",
    },

    {
        title: "Full-Stack Website",
        image: "src/assets/Project Images/Login Logout Website.png",
        description: "A website built using React JS, MongoDB, and Express JS leverages a modern technology stack to create a dynamic and efficient web application. React JS is utilized for building the frontend, providing a responsive and interactive user interface. MongoDB serves as the backend database, storing user data in a flexible, document-oriented format.",
        link: "/portfolio",
    },

    {
        title: "Java GUI Program",
        image: "src/assets/Project Images/Java GUI.png",
        description: "A Java GUI program with input fields, a submit button, and a reset button offers a straightforward user interface for data entry and interaction. Using Java's Swing library, the program creates a window contains text input field where users can enter data.",
        link: "/portfolio",
    },

    {
        title: "Java GUI Calculator",
        image: "src/assets/Project Images/Calculator Java.jpg",
        description: "It’s a GUI-based project used with the Swing module to organize all the elements that work under the Calculator in Java. Using Java's Swing library, the program creates a window contains text input field where users can enter data.",
        link: "/portfolio",
    },

];

const DetailsCard = ({ title, image, description, link }) => (
  <div className="Display-Card">
    <img src={image} alt={title} className="Project-Image" />
    <div className="Project-Content">
      <h3>{title}</h3>
      <p>{description}</p>
      <NavLink to = {link} className = "button-01">Check Out</NavLink>
      {/* <a href={link} className='button-01'>Check Out</a> */}
    </div>
  </div>
);

export const Portfolio = () => {

  return (
    <div className="Container-Portfolio">
      <div className="Porfolio-Heading">
        <h1 className="Title-About Portfolio">Popular Projects</h1>
        <input
          type="text"
          placeholder="Search Project Topic..."
          className="Search-Input"
        />
      </div>
      <div className="Project-Display">
        {projects.map((project, index) => (
          <DetailsCard
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};