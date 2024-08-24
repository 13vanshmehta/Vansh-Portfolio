import "./Header.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
    const handleDownloads = (e) => {
        e.preventDefault();
        const link = document.createElement('a');
        link.href = "Resume/Google Summer Internship Resume-VANSH-MEHTA.pdf";
        link.download = "Resume_Vansh.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setTimeout(() => {
            link.href = "https://drive.google.com/file/d/1VFRpwUqtdA_lBbuCIDUPz7y3zkKJ1XNW/view?usp=drive_link";
            link.target = "_blank";
            link.click();
        }, 120);
    }
    return (
        <>
            <header>
                <div className="Container-Header">
                    <div className="Page-Logo">
                        <NavLink to = "/" ><img src="src/assets/Page-Logo.png" alt="Logo" /><span className="Logo-Text">VANSH.DEV</span></NavLink>
                    </div>
                    
                    <nav>
                        <ul>
                            <li><NavLink to = "/" >Home</NavLink></li>
                            <li><NavLink to = "/about" >About</NavLink></li>
                            <li><NavLink to = "/portfolio" >Portfolio</NavLink></li>
                            <li><NavLink to = "/contact" >Contact Me</NavLink></li>
                            {/* <li><NavLink to = "/resume" >My Resume</NavLink></li> */}
                        </ul>
                    </nav>

                    <div className="Resume-Button" >
                        <NavLink to = "https://drive.google.com/file/d/1VFRpwUqtdA_lBbuCIDUPz7y3zkKJ1XNW/view?usp=drive_link" onClick = {handleDownloads} ><button className="Button-Home">RESUME / CV</button></NavLink>
                    </div>
                </div>
            </header>
        </>
    );
};