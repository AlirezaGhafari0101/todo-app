import React, { useState } from 'react'
import TodoModal from './UI/TodoModal'
import Button, { SelectButton } from './UI/Button'
import { useDispatch } from 'react-redux'

import styles from '../styles/modules/app.module.scss'
import { filterTodo } from '../slices/todoSlice'

function AppHeader() {

  const [modalIsShown, setModalIsShown] = useState(false)
  const dispatch = useDispatch()

  const showModalHandler = () => {
    setModalIsShown(prevState => !prevState)
  }

  const filterTodosHandler = (e) => {
    dispatch(filterTodo({status: e.target.value}))
  }

  return (
    <div className={styles.appHeader }>
        <Button type='button' variant='primary' onClick={showModalHandler}>
            Add Task
        </Button>
        <SelectButton onFilter={filterTodosHandler}>
            <option value="all">All</option>
            <option value="incomplete">Incomplete</option>
            <option value="complete">Complete</option>
        </SelectButton>
        {modalIsShown && <TodoModal onClose={showModalHandler}/> }
    </div>
  )
}

export default AppHeader