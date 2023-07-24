import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { motion } from "framer-motion";

import styles from "../styles/modules/app.module.scss";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function AppContent() {
  const todoList = useSelector((state) => state.todo.todoList);
  const sortedTodos = [...todoList].sort(
    (a, b) => new Date(b.time) - new Date(a.time)
  );
  {
  }

  return (
    <motion.div
      className={styles.content__wrapper}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {sortedTodos.length !== 0 ? (
        sortedTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <motion.p variants={child} className={styles.emptyText}>
          No Todos
        </motion.p>
      )}
    </motion.div>
  );
}

export default AppContent;
