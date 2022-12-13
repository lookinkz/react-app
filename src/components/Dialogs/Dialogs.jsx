import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Insar" id="1" />
        <DialogItem name="Ansar" id="2" />
        <DialogItem name="Anvar" id="3" />
        <DialogItem name="Janna" id="4" />
        <DialogItem name="Jenny" id="5" />
        <DialogItem name="Ruslan" id="6" />
      </div>
      <div className={s.messages}>
        <Message message="Hi" />
        <Message message="How are you?" />
        <Message message="Yo" />
      </div>
    </div>
  );
};

export default Dialogs;
