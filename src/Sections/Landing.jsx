import { Icon } from "@iconify/react";
import Hotelimage from "../assets/HTL-transformed.jpeg";
import Hotelimage2 from "../assets/HTL3.jpg";
import PropTypes from "prop-types";
import PopupVideo from "../assets/popupVideo";
import { useState } from "react";

function Landing({ translations }) {
  const Title = translations.LandingTitle.replace(/\n/g, "<br/>");
  const Desc = translations.Desc.replace(/\n/g, "<br/>");
  const bottomDesc = translations.BottomDesc.replace(/\n/g, "<br/>");
  const [openPopup, setOpenPopup] = useState(false);

  const openPopupHandler = () => {
    setOpenPopup(true);
  };

  const closePopupHandler = () => {
    setOpenPopup(false);
  };

  return (
    <div>
      <h1
        className="text-white text-5xl font-bold mt-6 leading-tight"
        dangerouslySetInnerHTML={{ __html: Title }}
      ></h1>
      <div className="flex justify-end mb-4">
        <p
          className="text-DarkGray text-lg mt-4"
          dangerouslySetInnerHTML={{ __html: Desc }}
        ></p>
      </div>
      <div className="relative">
        <img
          src={Hotelimage}
          alt=""
          className="w-full h-[500px] object-cover object-center rounded-md"
        />
        <div className="md:flex absolute -bottom-10 right-4 hidden">
          <div className="hidden lg:flex bg-black bg-opacity-70 w-60  items-center justify-center text-center">
            <div className="">
              <h1 className="text-white">Wonderful Becho</h1>
              <p className="text-DarkGray">Watch the new video</p>
            </div>
          </div>
          <div className="relative" onClick={openPopupHandler}>
            <img
              src={Hotelimage2}
              alt=""
              className="object-cover w-52 cursor-pointer"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Icon icon="ion:play" className="text-white text-6xl" />
            </div>
          </div>
        </div>
      </div>
      <p
        className="text-DarkGray text-lg mt-4"
        dangerouslySetInnerHTML={{ __html: bottomDesc }}
      ></p>
      {openPopup && <PopupVideo onClose={closePopupHandler} />}
    </div>
  );
}

Landing.propTypes = {
  translations: PropTypes.object.isRequired,
  closePopup: PropTypes.object.isRequired,
};

export default Landing;
