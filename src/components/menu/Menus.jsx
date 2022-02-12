import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export const Menus = ({ menuList, setMenuList }) => {
  const handleDelete = (id) => {
    // メニューの削除
    setMenuList(menuList.filter((menu) => menu.id !== id));
  };

  const handleDragEnd = (result) => {
    // メニューの並び替え
    const remove = menuList.splice(result.source.index, 1);
    menuList.splice(result.destination.index, 0, remove[0]);

    setMenuList(menuList);
  };

  return (
    <div className="menuLists">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {menuList.map((menu, index) => (
                <div key={menu.id}>
                  <Draggable index={index} draggableId={menu.draggableId}>
                    {(provided) => (
                      <div
                        className="menuList"
                        key={menu.id}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div className="menuText">{menu.text}</div>
                        <div className="menuLipidAndSugar">
                          脂質{menu.lipid}g
                        </div>
                        <div className="menuLipidAndSugar">
                          糖質{menu.sugar}g
                        </div>
                        <button
                          className="menuTrashButton"
                          onClick={() => handleDelete(menu.id)}
                        >
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </div>
                    )}
                  </Draggable>
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
