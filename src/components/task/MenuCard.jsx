import React from "react";
import { Result } from "./Result";
import { MenuAddInput } from "./input/MenuAddInput";
import { MenuCardDeleteButton } from "./button/MenuCardDeleteButton";
import { Menus } from "./Menus";
import { MenuCardTitle } from "./MenuCardTitle";

export const MenuCard = () => {
  return (
    <div className="menuCard">
      <MenuCardTitle />
      <Result />
      <MenuCardDeleteButton />
      <MenuAddInput />
      <Menus />
    </div>
  );
};
