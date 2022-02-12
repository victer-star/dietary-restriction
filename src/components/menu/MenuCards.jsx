import React, { useState } from "react";
import { MenuCard } from "./MenuCard";
import { AddMenuCardButton } from "./button/AddMenuCardButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export const MenuCards = () => {
  const [menuCardsList, setMenuCardsList] = useState([
    {
      id: "0",
      proggableId: "item0",
    },
  ]);

  const handleDragEnd = (result) => {
    const remove = menuCardsList.splice(result.source.index, 1);
    menuCardsList.splice(result.destination.index, 0, remove[0]);

    setMenuCardsList(menuCardsList);
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <div
            className="menuCardsArea"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {menuCardsList.map((menuCard, index) => (
              <MenuCard
                key={menuCard.id}
                index={index}
                menuCardsList={menuCardsList}
                setMenuCardsList={setMenuCardsList}
                menuCard={menuCard}
              />
            ))}
            {provided.placeholder}
            <AddMenuCardButton
              menuCardsList={menuCardsList}
              setMenuCardsList={setMenuCardsList}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
