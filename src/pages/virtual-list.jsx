import { useState, useEffect, useCallback } from 'react'
import VirtualList from '@/components/virtual-list'
import styles from './virtual-list.less'

export default () => {
  const [sourceData, setSourceData] = useState([])
  const [page, setPage] = useState(1)

  const createListData = useCallback(num => {
    const initnalList = Array.from(Array(20 * num).keys())
    setSourceData(initnalList)
  }, [])

  useEffect(() => {
    createListData(page)
  }, [createListData, page])

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
      scrollToBottom={() => {
        setPage(page + 1)
      }}
    />
  )
}
