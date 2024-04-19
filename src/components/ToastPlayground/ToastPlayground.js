import React from 'react'

import Button from '../Button'

import styles from './ToastPlayground.module.css'
import ToastShelf from '../ToastShelf/ToastShelf'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error']

function ToastPlayground() {
  const [message, setMessage] = React.useState('')
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0])
  const [toastList, setToastList] = React.useState([])

  const handleAddToast = (event) => {
    event.preventDefault()

    const toast = {
      id: crypto.randomUUID(),
      message,
      variant,
    }
    setToastList([...toastList, toast])

    setMessage('')
    setVariant(VARIANT_OPTIONS[0])
  }

  const handleClose = (id) => {
    setToastList(toastList.filter((toast) => toast.id !== id))
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toastList={toastList} handleClose={handleClose} />

      <form onSubmit={handleAddToast} className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((item) => (
              <label key={item} htmlFor={item}>
                <input
                  id={item}
                  type="radio"
                  name="variant"
                  value={item}
                  checked={item === variant}
                  onChange={() => setVariant(item)}
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button type="submit" onClick={handleAddToast}>
              Pop Toast!
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ToastPlayground
