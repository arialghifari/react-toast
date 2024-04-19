import React from 'react'

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([])

  const handleAddToast = ({ message, variant }) => {
    const toast = {
      id: crypto.randomUUID(),
      message,
      variant,
    }
    setToastList([...toastList, toast])
  }

  const handleClose = (id) => {
    setToastList(toastList.filter((toast) => toast.id !== id))
  }

  const value = {
    toastList,
    setToastList,
    handleAddToast,
    handleClose,
  }

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}

export default ToastProvider
