import React from 'react'

import Toast from '../Toast'
import styles from './ToastShelf.module.css'

function ToastShelf({ toastList, handleClose }) {
  return (
    <ol className={styles.wrapper}>
      {toastList?.map(({ id, message, variant }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast
            id={id}
            message={message}
            variant={variant}
            handleClose={handleClose}
          />
        </li>
      ))}
    </ol>
  )
}

export default ToastShelf
