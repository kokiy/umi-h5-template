import { React } from 'react'
import { Link } from 'umi'
import { useState, useEffect } from './_hook'

import styles from './index.less'

export default () => {
  const [getCount, setCount] = useState(3)
  console.log(getCount(), 33)
  useEffect(() => {
    console.log(getCount(), 33)
  })
  useEffect(() => {
    console.log(getCount(), 444)
  })
  setCount(5)

  return (
    <div className={styles.wrap}>
      <Link to="/calendar-comp-test">calendar</Link>
    </div>
  )
}
