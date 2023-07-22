import React from 'react'
import Button, { SelectButton } from './UI/Button'

import styles from '../styles/modules/app.module.scss'

function AppHeader() {
  return (
    <div className={styles.appHeader }>
        <Button type='button' variant='primary'>
            Add Todo
        </Button>
        <SelectButton>
            <option value="all">All</option>
            <option value="incomplete">Incomplete</option>
            <option value="complete">Complete</option>
        </SelectButton>
    </div>
  )
}

export default AppHeader