import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

function NavBar({
  translations,
  selectedLanguage,
  handleLanguageChange,
  scrollToSection,
}) {
  const [selectedCategory, setSelectedCategory] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsMobileMenuOpen(false);

    const body = document.querySelector("body");
    body.classList.remove("overflow-hidden");
  };

  useEffect(() => {
    if (selectedCategory === "Destination") {
      scrollToSection(0);
    } else if (selectedCategory === "Rooms") {
      scrollToSection(1);
    } else if (selectedCategory === "Review") {
      scrollToSection(2);
    } else if (selectedCategory === "FAQ") {
      scrollToSection(3);
    }
  }, [selectedCategory, scrollToSection]);

  const handleMobileMenuToggle = () => {
    const body = document.querySelector("body");
    setIsMobileMenuOpen(!isMobileMenuOpen);

    if (!isMobileMenuOpen) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
  };
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-lg font-bold text-white">{translations.title}</h1>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <h1
          className={`cursor-pointer ${
            selectedCategory === "Destination"
              ? "border-b-2 border-LightGray text-LightGray"
              : "text-DarkGray"
          }`}
          onClick={() => handleCategoryClick("Destination")}
        >
          {translations.destination}
        </h1>
        <h1
          className={`cursor-pointer ${
            selectedCategory === "Rooms"
              ? "border-b-2 border-LightGray text-LightGray"
              : "text-DarkGray"
          }`}
          onClick={() => handleCategoryClick("Rooms")}
        >
          {translations.rooms}
        </h1>
        <h1
          className={`cursor-pointer ${
            selectedCategory === "Review"
              ? "border-b-2 border-LightGray text-LightGray"
              : "text-DarkGray"
          }`}
          onClick={() => handleCategoryClick("Review")}
        >
          {translations.review}
        </h1>
        <h1
          className={`cursor-pointer ${
            selectedCategory === "FAQ"
              ? "border-b-2 border-LightGray text-LightGray"
              : "text-DarkGray"
          }`}
          onClick={() => handleCategoryClick("FAQ")}
        >
          {translations.faq}
        </h1>
      </div>
      <div className="hidden md:flex">
        <button
          className="px-4 py-2 font-semibold text-white"
          type="button"
          onClick={() =>
            handleLanguageChange(selectedLanguage === "en" ? "ge" : "en")
          }
        >
          {selectedLanguage}
        </button>
        <a
          href="https://www.booking.com/hotel/ge/lamala-becho.en-gb.html?aid=356980&type=total&keep_landing=1&sb_price_type=total&dist=0&sid=001a87917a031b5a9f98a937e627a035&label=gog235jc-1DCAsoUkIMbGFtYWxhLWJlY2hvSDNYA2hSiAEBmAEJuAEZyAEM2AED6AEBiAIBqAIDuALw0MqiBsACAdICJDQxYTkwYjQ4LTNhZjMtNGZjNS04NTBlLTNkYTE5MDcxOGVjZNgCBOACAQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-4 py-2 font-semibold text-white bg-MainGreen rounded-sm">
            {translations.bookNow}
          </button>
        </a>
      </div>
      <div className="md:hidden">
        <button
          className="text-white hover:text-gray-700 text-2xl"
          onClick={handleMobileMenuToggle}
        >
          <Icon icon="ion:navicon-round" />
        </button>
      </div>
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{ backgroundColor: "white", zIndex: 9999 }}
        >
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50"></div>
          <div className="absolute bg-white w-3/4 max-w-md p-4 rounded-lg text-center">
            <div className="flex justify-end">
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={handleMobileMenuToggle}
              >
                <Icon icon="ion:close-round" />
              </button>
            </div>
            <h1 className="text-lg font-bold mb-4">
              {translations.mobileMenu}
            </h1>
            <div className="mb-4">
              <h1
                className={`cursor-pointer ${
                  selectedCategory === "Home"
                    ? "border-b-2 border-black text-black"
                    : "text-DarkGray"
                }`}
                onClick={() => handleCategoryClick("Home")}
              >
                {translations.home}
              </h1>
              <h1
                className={`cursor-pointer ${
                  selectedCategory === "Destination"
                    ? "border-b-2 border-black text-black"
                    : "text-DarkGray"
                }`}
                onClick={() => handleCategoryClick("Destination")}
              >
                {translations.destination}
              </h1>
              <h1
                className={`cursor-pointer ${
                  selectedCategory === "Rooms"
                    ? "border-b-2 border-black text-black"
                    : "text-DarkGray"
                }`}
                onClick={() => handleCategoryClick("Rooms")}
              >
                {translations.rooms}
              </h1>
              <h1
                className={`cursor-pointer ${
                  selectedCategory === "Review"
                    ? "border-b-2 border-black text-black"
                    : "text-DarkGray"
                }`}
                onClick={() => handleCategoryClick("Review")}
              >
                {translations.review}
              </h1>
              <h1
                className={`cursor-pointer ${
                  selectedCategory === "FAQ"
                    ? "border-b-2 border-black text-black"
                    : "text-DarkGray"
                }`}
                onClick={() => handleCategoryClick("FAQ")}
              >
                {translations.faq}
              </h1>
            </div>
            <div className="flex flex-col">
              <button
                className="px-4 py-2 font-semibold"
                onClick={() =>
                  handleLanguageChange(selectedLanguage === "en" ? "ge" : "en")
                }
              >
                {selectedLanguage}
              </button>
              <a
                href="https://www.booking.com/hotel/ge/lamala-becho.en-gb.html?aid=356980&type=total&keep_landing=1&sb_price_type=total&dist=0&sid=001a87917a031b5a9f98a937e627a035&label=gog235jc-1DCAsoUkIMbGFtYWxhLWJlY2hvSDNYA2hSiAEBmAEJuAEZyAEM2AED6AEBiAIBqAIDuALw0MqiBsACAdICJDQxYTkwYjQ4LTNhZjMtNGZjNS04NTBlLTNkYTE5MDcxOGVjZNgCBOACAQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-4 py-2 font-semibold text-white bg-MainGreen rounded-sm">
                  {translations.bookNow}
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

NavBar.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  handleLanguageChange: PropTypes.func.isRequired,
  translations: PropTypes.object.isRequired,
  scrollToSection: PropTypes.object.isRequired,
};

export default NavBar;
