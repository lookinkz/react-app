import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + " " + s.active}>
          <NavLink to="/dialogs/1">Ruslan</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">Ansar</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">Anvar</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4">Janna</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/5">Jenny</NavLink>
        </div>
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
