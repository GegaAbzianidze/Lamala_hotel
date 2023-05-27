import { Icon } from "@iconify/react";
import { useRef, useState } from "react";
import Popup from "../assets/popup";
import PropTypes from "prop-types";
import image1 from "../assets/D1.jpg";
import image2 from "../assets/D2.jpg";
import image3 from "../assets/D3.jpg";
import image4 from "../assets/D4.jpg";
import image5 from "../assets/HTL2.jpg";
import image56 from "../assets/HTL-transformed.jpeg";

const images = [
  { image: image1 },
  { image: image2 },
  { image: image3 },
  { image: image4 },
  { image: image5 },
  { image: image56 },
];

function Carousel({ currentTranslations }) {
  const carouselRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState(null);

  const handlePrevious = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.8;
      carouselRef.current.scrollTo({
        left: carouselRef.current.scrollLeft - scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.8;
      carouselRef.current.scrollTo({
        left: carouselRef.current.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const openPopup = (image) => {
    setSelectedImage(image.image);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between mt-5">
        <h1 className="text-LightGreen bg-DarkGreen p-2 w-fit rounded-md">
          {currentTranslations.rooms}
        </h1>
        <div className="flex items-center justify-between gap-2">
          <div
            className="flex items-center justify-center w-10 h-10 text-white bg-MainGreen rounded-full bg-gray-900 hover:bg-gray-800 focus:outline-none"
            onClick={handlePrevious}
          >
            <Icon className="text-2xl" icon="ion:arrow-back-outline" />
          </div>
          <div
            className="flex items-center justify-center w-10 h-10 text-white bg-MainGreen rounded-full bg-gray-900 hover:bg-gray-800 focus:outline-none"
            onClick={handleNext}
          >
            <Icon className="text-2xl" icon="ion:arrow-forward-outline" />
          </div>
        </div>
      </div>
      <div
        className="overflow-x-auto whitespace-nowrap scroll-snap-type-x mandatory hide-scrollbar mt-5"
        ref={carouselRef}
        style={{ scrollPadding: "0 10px" }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="inline-block md:w-[350px] h-[500px] mx-4 transition-all duration-500 ease-in-out transform md:hover:w-[750px] scroll-snap-align-start"
            onClick={() => openPopup(image)}
          >
            <img
              src={image.image}
              alt={`Image ${index}`}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>

      {selectedImage && <Popup imageUrl={selectedImage} onClose={closePopup} />}
    </div>
  );
}

Carousel.propTypes = {
  currentTranslations: PropTypes.string.isRequired,
};

export default Carousel;
