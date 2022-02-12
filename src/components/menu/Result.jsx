import React from "react";

export const Result = ({
  inputText,
  setInputText,
  inputLipid,
  setInputLipid,
  inputSugar,
  setInputSugar,
  menuList,
  setMenuList,
}) => {
  let allLipid = menuList.map((menu) => menu.lipid);
  let integerLipid = allLipid.map(Number);
  let resultLipid = integerLipid.reduce((a, b) => {
    return a + b;
  }, 0);

  let allSugar = menuList.map((menu) => menu.sugar);
  let integerSugar = allSugar.map(Number);
  let resultSugar = integerSugar.reduce((c, d) => {
    return c + d;
  }, 0);
  return (
    <div className="result">
      <h3>
        脂質:
        <span>{resultLipid}</span>
        g、糖質: <span>{resultSugar}</span>g
      </h3>
    </div>
  );
};
