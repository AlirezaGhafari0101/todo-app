import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addTodo } from "../../slices/todoSlice";
import { v4 as uuid } from "uuid";

import styles from "../../styles/modules/modal.module.scss";
import { toast } from "react-hot-toast";

function Modal({ onClose }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("incomplete");

  const dispatch = useDispatch();

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const statusChangeHandler = (e) => {
    setStatus(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (title && status) {
      dispatch(
        addTodo({
          id: uuid(),
          title,
          status,
          time: new Date().toLocaleString(),
        })
      );
      toast.success('task added successfully!')
    }else{
      toast.error("title shouldn't be empty")
    }
    onClose()
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.closeButton} onClick={onClose}>
          <MdOutlineClose />
        </div>
        <form className={styles.form} onSubmit={formSubmitHandler}>
          <h1 className={styles.formTitle}>Add Task</h1>
          <label htmlFor="title">
            Title
            <input
              type="text"
              id="title"
              value={title}
              onChange={titleChangeHandler}
            />
          </label>
          <label htmlFor="status">
            Status
            <select
              name="status"
              id="status"
              value={status}
              onChange={statusChangeHandler}
            >
              <option value="incomplete">Incomplete</option>
              <option value="complete">Complete</option>
            </select>
          </label>
          <div className={styles.buttonContainer}>
            <Button type="submit" variant="primary">
              Add Task
            </Button>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
