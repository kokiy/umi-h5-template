import { useState } from 'react'
import styles from './animate.less'
import classnames from 'classnames'

export default () => {
  const [active, setActicve] = useState(false)

  return (
    <div className={styles.layout}>
      <div className={classnames(styles['app-menu'], { [styles['app-menu-active']]: active })}>
        33
        <button onClick={() => setActicve(false)}>hide</button>
      </div>
      <div className={styles.header}>
        <div className={styles['menu-icon']} onClick={() => setActicve(true)}>
          icon
        </div>
      </div>
    </div>
  )
}
