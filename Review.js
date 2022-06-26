import React, { useState } from "react";
import people from "./data";
import { FaAngleLeft, FaAngleRight, FaQuoteRight } from "react-icons/fa";
const Review = () => {
  const [index, setIndex] = useState(0);

  const { image, job, name, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextBtnHandler = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const backBtnHandler = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const surpriceHandler = () => {
    let randomNumber = Math.ceil(Math.random() * people.length - 1);
    if (index === randomNumber) {
      randomNumber += 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <div className="review">
      <div className="image_container">
        <img src={image} alt="" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <div className="detail">
        <h4>{name}</h4>
        <h6>{job}</h6>
        <p>{text}</p>
      </div>
      <div className="buttons">
        <button className="back_btn" onClick={backBtnHandler}>
          <FaAngleLeft />
        </button>
        <button className="next_btn" onClick={nextBtnHandler}>
          <FaAngleRight />
        </button>
      </div>
      <button className="surprice" onClick={surpriceHandler}>
        Surprice me
      </button>
    </div>
  );
};

export default Review;
