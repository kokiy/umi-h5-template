import React from 'react'
import { Button } from 'antd-mobile'
import styles from './index.less'

export default () => {
  const name = 4
  return (
    <div className={styles.wrap}>
      <Button>{name}default</Button>
      <Button disabled>default disabled</Button>
      <Button type="primary">primary</Button>
      <Button type="primary" disabled>
        primary disabled
      </Button>

      <Button type="warning">warning</Button>
      <Button type="warning" disabled>
        warning disabled
      </Button>

      <Button loading>loading button</Button>
      <h1 className={styles.title}>Hello World</h1>
    </div>
  )
}
