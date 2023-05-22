import { useState } from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const FaqItem = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="border-b py-4 px-4 bg-Lightpp">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleExpansion}
      >
        <h3 className="text-lg font-semibold text-white">{question}</h3>
        <span
          className={`transform transition-transform ${
            expanded ? "rotate-180" : "rotate-0"
          }`}
        >
          <Icon
            className="text-white text-2xl"
            icon="akar-icons:chevron-down"
          />
        </span>
      </div>
      {expanded && <p className="mt-2 text-white">{answer}</p>}
    </div>
  );
};

const FaqSection = ({ currentTranslations }) => {
  const faqItems = [
    {
      question: currentTranslations.question1,
      answer: currentTranslations.answer1,
    },
    {
      question: currentTranslations.question2,
      answer: currentTranslations.answer2,
    },
    {
      question: currentTranslations.question3,
      answer: currentTranslations.answer3,
    },
    {
      question: currentTranslations.question4,
      answer: currentTranslations.answer4,
    },
  ];

  return (
    <div className="mt-8">
      {faqItems.map((item, index) => (
        <FaqItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

FaqItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

FaqSection.propTypes = {
  currentTranslations: PropTypes.object.isRequired,
};
export default FaqSection;
