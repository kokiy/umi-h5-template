import React, { useEffect, useMemo } from 'react'
import ReactDOM from 'react-dom'
import styles from './index.less'

const portalRoot = document.querySelector('#portal-root')

export const CreateToastDom = () => {
  const toastContainer = useMemo(() => document.createElement('div'), [])

  useEffect(() => {
    portalRoot.appendChild(toastContainer)

    return () => {
      toastContainer.remove()
    }
  }, [toastContainer])
  return ReactDOM.createPortal(
    <span className={styles.toast}>'4444444444444'</span>,
    toastContainer,
  )
}

// export default {
//   show({ title }) {
//     return  <CreateToastDom />
//   },
// }
