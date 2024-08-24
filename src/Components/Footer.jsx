import React from "react";
import "./Footer.css";

export const Footer = () => {
    return (
        <>
            <section>
                <div className="Container-Footer">
                    <div className="Footer-Heading">
                        <h2 className="Logo-Text">VANSH MEHTA</h2>
                    </div>
                    <br />
                    <div className="Footer-Paragraph">
                        <p>I'm <span className="Highlight-Text">VANSH</span> a, <span className="Highlight-Text">Frontend, Backend & Web-Developer.</span></p>
                        <p>Here is my portfolio, were you would find all my upcoming, ongoing and past projects.</p>
                        <br />
                        <h4>Thank You For Visiting.</h4>
                    </div>
                    <br />
                    <div className="Social-Media">
                        <p>
                            <a href="https://www.instagram.com/_.13vanshmehta._?igsh=cXRrdXlldXB1cGZm" target="_blank"><img src="/src/assets/Social-Media-New-Logo/Instagram.svg" alt="instagram" width= "30px" height= "30px" /></a>

                            <a href="https://www.linkedin.com/in/vansh-mehta-vsm13" target="_blank"><img src="/src/assets/Social-Media-New-Logo/LinkedIn.svg" alt="LinkedIn" width= "30px" height= "30px" /></a>

                            <a href="https://x.com/MehtaVansh3?t=yAnUh2uQlafR-cGla4-D-Q&s=09" target="_blank"><img src="/src/assets/Social-Media-New-Logo/Twitter.svg" alt="Twitter" width= "30px" height= "30px" /></a>

                            <a href="https://wa.me/+917977101454" target="_blank"><img src="/src/assets/Social-Media-New-Logo/Whatsapp.svg" alt="Whatsapp" width= "30px" height= "30px" /></a>

                            <a href="https://github.com/13vanshmehta" target="_blank"><img src="/src/assets/Social-Media-New-Logo/Github.svg" alt="Github" width = "30px" height = "30px" /></a>
                            </p>
                    </div>
                </div>
            </section>
        </>
    );
};