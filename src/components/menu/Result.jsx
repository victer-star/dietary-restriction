import React from "react";

export const Result = (
  inputText,
  setInputText,
  inputLipid,
  setInputLipid,
  inputSugar,
  setInputSugar,
  menuList,
  setMenuList
) => {
  return (
    <div className="result">
      <h3>
        脂質:
        <span>20</span>
        g、糖質: <span>20</span>g
      </h3>
    </div>
  );
};