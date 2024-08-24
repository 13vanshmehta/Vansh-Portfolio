import React from "react";

export const About = () => {
    return (
        <>
            <div className="Container-About">
                <div className="Container grid grid-two-cols">
                    <div className="Content-Left">
                        <h1 className="Title-About">About Me</h1>
                        <br />
                        <span className="Highlight-Para">Frontend, Backend & Web-Developer</span>
                        <p>An Object-Oriented and Web-Developer, programing in visual studio code from past 4 years, created certain project to practice and up-skill. Experienced as a student, performed well in semester I & II and scores 8.80 SGPA and 8.68 SGPA respectively in 1st Year of an Engineering College, named, Dwarkadas J. Sanghvi College of Engineering. Achieved an ability to work on time, efficiently and effectively. Has a soft skills like communication, adaptable, flexibility in working, and special good at teamwork.Developed a Technical Skills Like Programming Languages such as <span className="Highlight-Text">Python, Java, JavaScript, C and Frameworks Like React-JS, Express-JS, and MongoDB as a Database Service</span>. Expertise in Web-development and back-end development also in a soft field such as publicity and event management. Possesses in-depth knowledge of multiple technology stacks which in turn contributes to an efficient development stage of products.
                        </p>
                        <br />
                        <p>Designed and implemented an API to get user-data and store it in database with unique token of user using JWT Json-Web Token. Led the development of APIs for Configuration and verification of user using token created for specific user. Created certain projects in java such as GUI using Swing and implemented OOPs using java Programming. Created various games such as Bird Game in python Using PyGames. Learning Full-Stack for web-apps to create a responsive and useful websites or web-apps.
                        </p>
                    </div>
                    <div className="Content-Right">
                        <img src="src/assets/My-Pic.jpg" alt="" className="About-Me-Pic"/>
                    </div>
                </div>
            </div>
        </>
    );
};