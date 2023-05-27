import { Icon } from "@iconify/react";
import googleMaps from "./Google_maps.png";
import PropTypes from "prop-types";

function Button({ handleClick, coordinates, title, distance }) {
  return (
    <div>
      <button
        onClick={() => handleClick(coordinates)}
        className="flex items-center justify-between text-white w-full px-4 py-4 md:py-6 mb-2 hover:bg-DarkGreen focus:bg-DarkGreen bg-transparent"
      >
        <div className="flex items-center gap-2">
          <Icon icon="ion:navigate-circle" className="text-2xl" />
          <div className="flex-grow flex flex-col text-left">
            <span className="text-sm font-bold md:text-base">{title}</span>
            <span className="text-sm text-DarkyGray md:text-base">
              {distance} KM
            </span>
          </div>
        </div>
        <a
          href={`https://maps.google.com/maps?q=${coordinates[0]},${coordinates[1]}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center ml-auto text-MainGreen hover:text-white h-8"
        >
          <img src={googleMaps} alt="Google Maps" className="h-full max-h-full" />
        </a>
      </button>
    </div>
  );
}

Button.propTypes = {
    handleClick: PropTypes.object.isRequired,
    coordinates: PropTypes.object.isRequired,
    title: PropTypes.object.isRequired,
    distance: PropTypes.object.isRequired,
  };

export default Button;
