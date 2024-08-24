import { BrowserRouter , Routes , Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Portfolio } from "./Pages/Portfolio";
import { Contact } from "./Pages/Contact";
import { Resume } from "./Pages/Resume";
import { Footer } from "./Components/Footer";

const App = () => {

  return(
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/portfolio" element = {<Portfolio />} />
          <Route path = "/contact" element = {<Contact />} />
          {/* <Route path = "/resume" element = {<Resume />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;