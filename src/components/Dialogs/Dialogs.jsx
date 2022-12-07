import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + " " + s.active}>Ruslan</div>
        <div className={s.dialog}>Ansar</div>
        <div className={s.dialog}>Anvar</div>
        <div className={s.dialog}>Janna</div>
        <div className={s.dialog}>Jenny</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi!</div>
        <div className={s.message}>How are you?</div>
        <div className={s.message}>Yo</div>
      </div>
    </div>
  );
};

export default Dialogs;
