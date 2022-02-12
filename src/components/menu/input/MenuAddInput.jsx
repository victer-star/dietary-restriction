import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { v4 as uuid } from "uuid";

export const MenuAddInput = ({
  inputText,
  setInputText,
  inputLipid,
  setInputLipid,
  inputSugar,
  setInputSugar,
  menuList,
  setMenuList,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const menuId = uuid();
    setInputText(data.text);
    setInputLipid(data.lipid);
    setInputSugar(data.sugar);
    // メニューの追加;
    setMenuList([
      ...menuList,
      {
        id: menuId,
        draggableId: `menu-${menuId}`,
        text: data.text,
        lipid: data.lipid,
        sugar: data.sugar,
      },
    ]);
    reset();
  };

  // フォーム
  return (
    <div className="menuAddInput">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="menuTitleAddInput"
          type="text"
          placeholder="食品名"
          {...register("text", {
            required: "食品名を入力してください",
            maxLength: 20,
          })}
        />

        <input
          className="sugarAndLipidsInput"
          type="number"
          placeholder="脂質(g)"
          step="0.5"
          {...register("lipid", {
            required: "0〜100gまでの値を入力してください",
          })}
        />

        <input
          className="sugarAndLipidsInput"
          type="number"
          placeholder="糖質(g)"
          step="0.5"
          {...register("sugar", {
            required: "0〜100gまでの値を入力してください",
          })}
        />
        <input type="submit" className="newMenuButton" value="作成"></input>
        <ErrorMessage
          errors={errors}
          name="text"
          render={({ message }) => <div className="error">{message}</div>}
        />
        <ErrorMessage
          errors={errors}
          name="lipid"
          render={({ message }) => <div className="error">{message}</div>}
        />
        <ErrorMessage
          errors={errors}
          name="sugar"
          render={({ message }) => <div className="error">{message}</div>}
        />
      </form>
    </div>
  );
};
