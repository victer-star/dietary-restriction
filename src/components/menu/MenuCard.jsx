import React, { useState } from "react";
import { Result } from "./Result";
import { MenuAddInput } from "./input/MenuAddInput";
import { MenuCardDeleteButton } from "./button/MenuCardDeleteButton";
import { Menus } from "./Menus";
import { MenuCardTitle } from "./MenuCardTitle";
import { Draggable } from "react-beautiful-dnd";

export const MenuCard = ({
  menuCardsList,
  setMenuCardsList,
  menuCard,
  index,
}) => {
  const [inputText, setInputText] = useState("");
  const [inputLipid, setInputLipid] = useState("");
  const [inputSugar, setInputSugar] = useState("");
  const [menuList, setMenuList] = useState([]);
  return (
    <Draggable draggableId={menuCard.id} index={index}>
      {(provided) => (
        <div
          className="menuCard"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div
            className="menuCardTitleAndMenuCardDeleteButtonArea"
            {...provided.dragHandleProps}
          >
            <MenuCardTitle />
            <MenuCardDeleteButton
              menuCardsList={menuCardsList}
              setMenuCardsList={setMenuCardsList}
              menuCard={menuCard}
            />
          </div>
          <Result
            inputText={inputText}
            setInputText={setInputText}
            inputLipid={inputLipid}
            setInputLipid={setInputLipid}
            inputSugar={inputSugar}
            setInputSugar={setInputSugar}
            menuList={menuList}
            setMenuList={setMenuList}
          />
          <MenuAddInput
            inputText={inputText}
            setInputText={setInputText}
            inputLipid={inputLipid}
            setInputLipid={setInputLipid}
            inputSugar={inputSugar}
            setInputSugar={setInputSugar}
            menuList={menuList}
            setMenuList={setMenuList}
          />
          <Menus menuList={menuList} setMenuList={setMenuList} />
        </div>
      )}
    </Draggable>
  );
};
