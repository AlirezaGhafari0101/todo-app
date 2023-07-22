import React, { useState } from 'react'
import TodoModal from './UI/TodoModal'
import Button, { SelectButton } from './UI/Button'

import styles from '../styles/modules/app.module.scss'

function AppHeader() {

  const [modalIsShown, setModalIsShown] = useState(false)

  const showModalHandler = () => {
    setModalIsShown(prevState => !prevState)
  }

  return (
    <div className={styles.appHeader }>
        <Button type='button' variant='primary' onClick={showModalHandler}>
            Add Task
        </Button>
        <SelectButton>
            <option value="all">All</option>
            <option value="incomplete">Incomplete</option>
            <option value="complete">Complete</option>
        </SelectButton>
        {modalIsShown && <TodoModal onClose={showModalHandler}/> }
    </div>
  )
}

export default AppHeader