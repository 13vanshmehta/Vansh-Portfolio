import React from "react";
import "../index.css";
import { NavLink } from "react-router-dom"
import { About } from "./About";
import { Contact } from "./Contact";
import { Portfolio } from "./Portfolio";

export const Home = () => {
    return (
        <>
            <div className="Container-Home">
                <div className="Home-Left">
                    <h1>I am <span className="Highlight">VANSH</span>, a</h1>
                    <span className="Highlight-Para">Frontend, Backend & Web-Developer</span>
                    <p>
                        I'm a passionate and motivated developer with a strong foundation in web development. Developed a Technical Skills Like Programming Languages such as Python, Java, JavaScript, C and Frameworks Like React-JS, Express-JS, and MongoDB as a Database Service.
                    </p>
                    <NavLink to = "/contact"><button className="Button-Home">Let's Connect <span>&#8594;</span></button></NavLink>
                </div>
                <div className="Home-Right">
                    <div className="About-Me">
                        <h3>About Me</h3>
                        <p>I'm a 2nd year student, purusing Bachelors of Technology <span>&#40;</span> BTech. <span>&#41;</span> at Dwarkadas J. Sanghvi College of Engineering, has a SGPA of 8.80 and 8.68 in Semester - I & II respectively.</p>
                        <NavLink to = "/about" ><button className="button-01">Read More <span>&#8594;</span></button></NavLink>
                    </div>
                    <div className="My-Work">
                        <h3>My Work</h3>
                        <p>Designed and implemented an API to get user-data and store it in database with unique token of user using JWT and many other projects.</p>
                        <NavLink to = "/portfolio" ><button className="button-01">Explore Portpolio <span>&#8594;</span></button></NavLink>
                    </div>
                    <div className="Follow-Me">
                        <h3>Follow Me</h3>
                        <p>
                            <a href="https://www.instagram.com/_.13vanshmehta._?igsh=cXRrdXlldXB1cGZm" target="_blank"><img src="/src/assets/Social Media Logo/Instagram.svg" alt="instagram" width= "30px" height= "30px" /></a>

                            <a href="https://www.linkedin.com/in/vansh-mehta-vsm13" target="_blank"><img src="/src/assets/Social Media Logo/LinkedIn.svg" alt="LinkedIn" width= "30px" height= "30px" /></a>

                            <a href="https://x.com/MehtaVansh3?t=yAnUh2uQlafR-cGla4-D-Q&s=09" target="_blank"><img src="/src/assets/Social Media Logo/Twitter.svg" alt="Twitter" width= "30px" height= "30px" /></a>

                            <a href="https://wa.me/+917977101454" target="_blank"><img src="/src/assets/Social Media Logo/Whatsapp.svg" alt="Whatsapp" width= "30px" height= "30px" /></a>
        
                            <a href="https://github.com/13vanshmehta" target="_blank"><img src="/src/assets/Social Media Logo/Github.svg" alt="Github" width = "30px" height = "30px" /></a>
                        </p>
                    </div>
                </div>
            </div>
        <About />
        <Portfolio />
        <Contact />
        </>

    );
};
