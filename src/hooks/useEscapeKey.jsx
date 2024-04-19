import React from 'react'

export default function useEscapeKey(callback) {
  return React.useEffect(() => {
    const handleClose = window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        callback()
      }
    })

    return () => window.removeEventListener('keydown', handleClose)
  }, [callback])
}
