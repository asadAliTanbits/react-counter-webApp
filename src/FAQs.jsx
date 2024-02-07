import React, { useState } from "react";

const FAQs = ({ question }) => {
  return (
    <>
      <h1 className="text-4xl font-bolder text-center m-4">FAQs</h1>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="questions">
          {question.map((question) => (
            <Question key={question.id} question={question} />
          ))}
        </div>
      </div>
    </>
  );
};

const Question = ({ question }) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="mb-4">
      <div
        className="flex justify-between items-center bg-gray-200 p-4 cursor-pointer"
        onClick={toggleInfo}
      >
        <h3 className="text-xl font-bold">{question.title}</h3>
        <span className="text-gray-600">{showInfo ? "▲" : "▼"}</span>
      </div>
      {showInfo && (
        <p className="bg-gray-100 p-4 mt-2 text-gray-800">{question.info}</p>
      )}
    </div>
  );
};

export default FAQs;
