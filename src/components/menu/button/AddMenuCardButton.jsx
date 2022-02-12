import React from "react";
import { v4 as uuid } from "uuid";

export const AddMenuCardButton = ({ menuCardsList, setMenuCardsList }) => {
  const addMenuCard = () => {
    const menuCardId = uuid();
    // メニューカードの追加;
    setMenuCardsList([
      ...menuCardsList,
      {
        id: menuCardId,
        draggableId: `item${menuCardId}`,
      },
    ]);
  };

  return (
    <div className="AddMenuCardButtonArea">
      <button className="AddMenuCardButton" onClick={addMenuCard}>
        +
      </button>
    </div>
  );
};
