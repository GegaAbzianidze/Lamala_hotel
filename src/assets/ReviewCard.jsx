import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const ReviewCard = ({ reviews }) => {
  const renderStars = () => {
    return Array.from({ length: reviews.rating }, (_, index) => (
      <Icon key={index} icon="ion:ios-star" className="text-yellow w-5 h-5" />
    ));
  };

  return (
    <div
      className="bg-Lightpp rounded-lg shadow-md p-4 md:w-[450px] md:h-[250px] sm:w-full sm:h-auto mt-8"
      style={{ maxWidth: "100%" }}
    >
      <div className="flex items-center mb-4">
        <div className="flex">{renderStars()}</div>
      </div>
      <p className="text-sm text-gray-600 mb-4 text-white">{reviews.comment}</p>
      <div className="flex items-center">
        <img
          src={reviews.profilePic}
          alt="Profile"
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <p className="text-md font-semibold text-white">{reviews.name}</p>
          <p className="text-sm text-gray-500 text-white">{reviews.location}</p>
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  reviews: PropTypes.shape({
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    profilePic: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewCard;
