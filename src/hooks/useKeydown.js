import React from 'react'

export default function useKeydown(key, callback) {
  return React.useEffect(() => {
    const handleClose = window.addEventListener('keydown', (e) => {
      if (e.key === key) {
        callback()
      }
    })

    return () => window.removeEventListener('keydown', handleClose)
  }, [key, callback])
}
