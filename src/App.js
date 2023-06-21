import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { Join } from "./Pages/Join";
import { Popup } from "./Pages/Popup";

function App() {
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  const toggleNavMenu = () => {
    setNavMenuOpen(!navMenuOpen);
  };
  // useEffect(() => {
  //   var addScript = document.createElement('script');
  //   addScript.setAttribute(
  //     'src',
  //     '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
  //   );
  //   document.body.appendChild(addScript);
  //   window.googleTranslateElementInit = googleTranslateElementInit;
  // }, []);

  // const googleTranslateElementInit = () => {
  //   new window.google.translate.TranslateElement(
  //     {
  //       pageLanguage: 'en',
  //       includedLanguages: 'en,ar', // include this for selected languages
  //       // layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
  //     },
  //     'google_translate_element'
  //   );
  // };


  return (
    <div className="App">
      <div className="NavBar">
  
        <div className="logo-text">SPC</div>
        <div className={`links ${navMenuOpen ? "active" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/forms">Forms</Link>
          <Link to="/team">Our Team</Link>
        </div>

        {/* <div className={`burger ${navMenuOpen ? "active" : ""}`} onClick={toggleNavMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div> */}
      </div>

      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Popup />} />
          <Route path="/contact" element={<Popup />} />
          <Route path="/gallery" element={<Popup />} />
          <Route path="/forms" element={<Popup />} />
          <Route path="/join" element={<Join />} />
          <Route path="/team" element={<Popup />} />
        </Routes>
      </div>
      <footer className="footer-section">
        <p>
          &copy;
          {new Date().getFullYear()} Syrian Parties Club. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
