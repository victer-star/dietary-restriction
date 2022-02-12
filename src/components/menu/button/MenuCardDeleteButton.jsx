import React from "react";

export const MenuCardDeleteButton = ({
  menuCardsList,
  setMenuCardsList,
  menuCard,
}) => {
  const menuCardDeleteButton = (id) => {
    // メニューカードの削除
    setMenuCardsList(menuCardsList.filter((e) => e.id !== id));
  };
  return (
    <div>
      <button
        className="menuCardDeleteButton"
        onClick={() => menuCardDeleteButton(menuCard.id)}
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};
