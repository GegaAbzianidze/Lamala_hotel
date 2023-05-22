import { Icon } from "@iconify/react";
import PropTypes from "prop-types";

const PopupVideo = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-opacity-75 bg-black">
      <div className="max-w-screen-lg w-full mx-auto p-4">
        <button
          className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 focus:outline-none"
          onClick={onClose}
        >
          <Icon icon="ion:close-round" />
        </button>
        <iframe
          src="https://www.youtube.com/embed/vIBHZ7FfWUA"
          title="Video Player"
          width="1060"
          height="515"
        ></iframe>
      </div>
    </div>
  );
};

PopupVideo.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default PopupVideo;
