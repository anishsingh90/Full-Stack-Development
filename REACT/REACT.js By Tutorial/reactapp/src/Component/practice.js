import React from "react";

const PracticeComponent = () => {
  const numbers = [1, 2, 3, 4, 5, 4];

  const updatedNums = numbers.map((number) => {
    return <li key={number}>{number}</li>;
  });

  return <ul>{updatedNums}</ul>;
};

export default PracticeComponent;
