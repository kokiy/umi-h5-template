import { useState, useEffect } from 'react'
import VirtualList from '@/components/virtual-list'
import styles from './virtual-list.less'

export default () => {
  const [sourceData, setSourceData] = useState([])

  const createListData = () => {
    const initnalList = Array.from(Array(4000).keys())
    setSourceData(initnalList)
  }

  useEffect(() => {
    createListData()
  }, [])

  return (
    <VirtualList
      data={sourceData}
      renderItem={item => {
        return (
          <div className={styles.item} style={{ height: '100px' }} key={item}>
            Current Position: {item}
          </div>
        )
      }}
    />
  )
}
