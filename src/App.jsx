import { useState } from "react";
import "./App.css";
import Landing from "./Sections/Landing";
import NavBar from "./Sections/NavBar";
import translations from "./assets/Translation.json"
import Destinations from "./Sections/Destinations";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const currentTranslations = translations[selectedLanguage];

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <>
      <NavBar
        selectedLanguage={selectedLanguage}
        handleLanguageChange={handleLanguageChange}
        translations={currentTranslations}
      />
      <Landing />
      <Destinations/>
    </>
  );
}

export default App;
