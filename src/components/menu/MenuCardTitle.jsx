import React, { useState } from "react";

export const MenuCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState("メニュー名");

  const handleClick = () => {
    setIsClick(true);
  };

  const handleChange = (e) => {
    setInputCardTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputCardTitle === "") {
      return;
    } else {
      setIsClick(false);
    }
  };

  const handleBlur = () => {
    setIsClick(false);
  };
  return (
    <div className="menuCardTitle" onClick={handleClick}>
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input
            className="menuCardTitleInput"
            autoFocus
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={inputCardTitle}
            maxLength="20"
          ></input>
        </form>
      ) : (
        <h3>{inputCardTitle}</h3>
      )}
    </div>
  );
};
