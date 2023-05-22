import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';

const Popup = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-opacity-75 bg-black">
      <div className="max-w-screen-lg mx-auto p-4">
        <button
          className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 focus:outline-none"
          onClick={onClose}
        >
          <Icon icon="ion:close-round" />
        </button>
        <img src={imageUrl} alt="Popup" className="w-full h-auto" />
      </div>
    </div>
  );
};

Popup.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };

export default Popup;
