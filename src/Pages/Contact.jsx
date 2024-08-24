import React from "react";
import { NavLink } from "react-router-dom";

export const Contact = () => {
    return (
        <>
            <div className="Container-About">
                <div className="Container grid grid-two-cols">
                    <div className="Content-Left">
                        <h1 className="Title-About">Contact Me</h1>
                        {/* <p className="Contact-Para">Designed and implemented an API to get user-data and store it in database with unique token of user using JWT Json-Web Token. Led the development of APIs for Configuration and verification of user using token created for specific user.
                        </p> */}

                        <div className="Contact-Form">
                            <form>
                                <div>
                                    <label htmlFor="username">Name</label>
                                    <input type="text" name="username" placeholder="Enter Your Name" id="username" required/>
                                </div>

                                <div>
                                    <label htmlFor="email">Email ID</label>
                                    <input type="text" name="email" placeholder="Enter Your Email ID" id="email" required/>
                                </div>

                                <div>
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Write Your Query Here." required></textarea>
                                </div>

                                <NavLink to = "/"><button type="submit" className="Button-Home">Connect Vansh</button></NavLink>
                            </form>
                        </div>
                    </div>
                    <div className="Contact-Right">
                        <img src="src/assets/Contact-Pic.png" alt="Contact"/>
                    </div>
                </div>
            </div>
        </>
    );
};