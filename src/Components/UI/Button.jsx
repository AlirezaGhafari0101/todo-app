import React from 'react'
import styles from '../../styles/modules/button.module.scss'

function Button({children, variant , type, onClick}) {
  return (
   <button type={type} className={`${styles.button} ${styles[`button--${variant}`]}`} onClick={onClick}>
    {children}
   </button>
  )
}

function SelectButton({children}) {
    return (
    <select  className={`${styles.button} ${styles.button__select}`}>
        {children}
    </select>
    )
  }


export {SelectButton};
export default Button;