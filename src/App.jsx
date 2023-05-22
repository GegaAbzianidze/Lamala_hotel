import { useState } from "react";
import "./App.css";
import Landing from "./Sections/Landing";
import NavBar from "./Sections/NavBar";
import translations from "./assets/Translation.json";
import Destinations from "./Sections/Destinations";
import Carousel from "./Sections/Carousel";
import FaqItem from "./Sections/FAQ";
import ReviewCarousel from "./Sections/ReviewCarousel";

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
        <h1 className="text-LightGreen bg-DarkGreen p-2 w-fit rounded-md mb-8">
          {currentTranslations.destination}
        </h1>
        <Destinations />
      </div>
      <div className="mt-14">
        <Carousel currentTranslations={currentTranslations} />
      </div>
      <div>
        <h1 className="text-LightGreen bg-DarkGreen p-2 w-fit rounded-md mt-8">
          {currentTranslations.review}
        </h1>
        <ReviewCarousel />
      </div>
      <div>
        <h1 className="text-LightGreen bg-DarkGreen p-2 w-fit rounded-md mt-8">
          {currentTranslations.faq}
        </h1>
        <FaqItem currentTranslations={currentTranslations} />
      </div>
    </>
  );
}

export default App;
