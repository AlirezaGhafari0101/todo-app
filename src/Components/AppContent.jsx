import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

function AppContent() {

  const todoList = useSelector(state => state.todo.todoList)
  const sortedTodos = [...todoList].sort((a, b) => new Date(b.time) - new Date(a.time))
  

 

  return (
    <div>
     {sortedTodos.map(todo => (<TodoItem key={todo.id} todo={todo}/>))}
    </div>
  )
}

export default AppContent