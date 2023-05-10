import { useState } from "react";
import "./App.css";
import Landing from "./Sections/Landing";
import NavBar from "./Sections/NavBar";
import translations from "./assets/Translation.json";
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
      <div>
        <Landing translations={currentTranslations} />
      </div>
      <div className="bg-Lightpp bgC">
        <h1 className="text-LightGreen bg-DarkGreen p-2 w-fit rounded-md">
          {currentTranslations.destination}
        </h1>
        <Destinations />
      </div>
    </>
  );
}

export default App;
