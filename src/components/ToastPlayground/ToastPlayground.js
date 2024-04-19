import React from 'react'

import Button from '../Button'

import styles from './ToastPlayground.module.css'
import Toast from '../Toast/Toast'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error']

function ToastPlayground() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [message, setMessage] = React.useState('')
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0])

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {isOpen && (
        <Toast message={message} variant={variant} setIsOpen={setIsOpen} />
      )}

      <div className={styles.controlsWrapper}>
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
                  defaultChecked={item === variant}
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
            <Button onClick={() => setIsOpen(true)}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToastPlayground
