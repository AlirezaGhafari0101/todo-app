import { format } from "date-fns";
import toast from "react-hot-toast";
import { MdDelete, MdEdit } from "react-icons/md";
import TodoModal from "./UI/TodoModal";
import { useDispatch } from "react-redux";


import styles from "../styles/modules/todoItem.module.scss";
import { deleteTodo, doTodo } from "../slices/todoSlice";
import { useEffect, useState } from "react";
import CheckBox from "./UI/CheckBox";

function TodoItem({todo}) {
  const [isModalShowing, setIsModalShowingHandler] = useState(false)
  const [checked, setChecked] = useState(false)
  const dispatch = useDispatch()

  useEffect(()=> {
    if(todo.status === 'complete'){
      setChecked(true)
    }else{
      setChecked(false)
    }
  
  }, [todo,status])

 
  

  const showModalHandler = () => {
    setIsModalShowingHandler(prevState => !prevState)
  }

  const deleteTodoHandler = (id) =>{
    dispatch(deleteTodo({id}))
    toast.success("todo deleted successfully")
  }
  
  const doTodoHandler = () => {
    setChecked(checked => !checked)
    dispatch(doTodo({id: todo.id}))
   
  }

  return (
    <>
      <div className={styles.item}>
        <div className={styles.todoDetails}>
       <CheckBox checked={checked} onCheck={doTodoHandler} on/>
          <div className={styles.texts}>
            <p
              className={`${styles.todoText}
                ${todo.status === "complete" && styles["todoText--completed"]}`}
            >
            {todo.title}
            </p>
            <p className={styles.time}>
            {format(new Date(todo.time), 'p, MM/dd/yyyy')}
            </p>
          </div>
        </div>
        <div className={styles.todoActions}>
          <div className={styles.icon} onClick={() => {deleteTodoHandler(id)}}>
            <MdDelete />
          </div>
          <div className={styles.icon} onClick={showModalHandler}>
            <MdEdit />
          </div>
        </div>
      </div>
      {isModalShowing && <TodoModal type='update' onClose={showModalHandler} todo={todo}/>}
    </>
  );
}

export default TodoItem;
