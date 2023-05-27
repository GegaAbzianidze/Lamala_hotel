import { useRef, useState } from "react";
import "./App.css";
import Landing from "./Sections/Landing";
import NavBar from "./Sections/NavBar";
import translations from "./assets/Translation.json";
import Destinations from "./Sections/Destinations";
import Carousel from "./Sections/Carousel";
import FaqItem from "./Sections/FAQ";
import ReviewCarousel from "./Sections/ReviewCarousel";
import ScrollIndicator from "./assets/ScrollIndicator";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const currentTranslations = translations[selectedLanguage];

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const sectionRefs = [
    useRef(null), // Ref for Section 1
    useRef(null), // Ref for Section 2
    useRef(null), // Ref for Section 3
    useRef(null), // Ref for Section 4
    useRef(null), // Ref for Section 5
  ];

  const scrollToSection = (index) => {
    sectionRefs[index].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <NavBar
        selectedLanguage={selectedLanguage}
        handleLanguageChange={handleLanguageChange}
        translations={currentTranslations}
        scrollToSection={scrollToSection}
      />
      <ScrollIndicator />
      <div>
        <Landing translations={currentTranslations} />
      </div>
      <div className="bg-Lightpp bgC" ref={sectionRefs[0]}>
        <h1 className="text-LightGreen bg-DarkGreen p-2 w-fit rounded-md mb-8">
          {currentTranslations.destination}
        </h1>
        <Destinations translations={currentTranslations} />
      </div>
      <div className="mt-14" ref={sectionRefs[1]}>
        <Carousel currentTranslations={currentTranslations} />
      </div>
      <div ref={sectionRefs[2]}>
        <h1 className="text-LightGreen bg-DarkGreen p-2 w-fit rounded-md mt-8">
          {currentTranslations.review}
        </h1>
        <ReviewCarousel />
      </div>
      <div ref={sectionRefs[3]}>
        <h1 className="text-LightGreen bg-DarkGreen p-2 w-fit rounded-md mt-8">
          {currentTranslations.faq}
        </h1>
        <FaqItem currentTranslations={currentTranslations} />
      </div>
    </>
  );
}

export default App;
