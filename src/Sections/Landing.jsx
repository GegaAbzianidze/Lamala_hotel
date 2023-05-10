import Hotelimage from "../assets/HTL-transformed.jpeg";
import PropTypes from "prop-types";

function Landing({ translations }) {
  const Title = translations.LandingTitle.replace(/\n/g, "<br/>");
  const Desc = translations.Desc.replace(/\n/g, "<br/>");
  const bottomDesc = translations.BottomDesc.replace(/\n/g, "<br/>");

  return (
    <div>
      <h1
        className="text-white text-6xl font-bold mt-6"
        dangerouslySetInnerHTML={{ __html: Title }}
      ></h1>
      <div className="justify-end flex mb-4">
        <p
          className="text-DarkGray text-lg mt-2"
          dangerouslySetInnerHTML={{ __html: Desc }}
        ></p>
      </div>
      <img
        src={Hotelimage}
        alt=""
        className="w-full h-[500px] object-cover object-center rounded-md"
      />
      <p
        className="text-DarkGray text-lg mt-4"
        dangerouslySetInnerHTML={{ __html: bottomDesc }}
      ></p>
    </div>
  );
}

Landing.propTypes = {
  translations: PropTypes.object.isRequired,
};

export default Landing;
