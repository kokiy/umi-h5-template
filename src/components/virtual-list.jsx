import { useRef, useState, useMemo, useEffect } from 'react'
import styles from './virtual-list.less'

const defaultRenderItem = () => {}
const defaultScrollToBottom = () => {}

export default ({
  SCROLL_VIEW_HEIGHT = document.body.clientHeight,
  ITEM_HEIGHT = 100,
  PRE_LOAD_COUNT = 5,
  data,
  renderItem = defaultRenderItem,
  scrollToBottom = defaultScrollToBottom,
}) => {
  const VIEW_ITEM_SIZE = Math.ceil(SCROLL_VIEW_HEIGHT / ITEM_HEIGHT) // 预加载数量
  const containerRef = useRef()
  const loadMoreRef = useRef()
  const [showRange, setShowRange] = useState({ start: 0, end: VIEW_ITEM_SIZE + PRE_LOAD_COUNT })

  const scrollContentHeight = useMemo(() => {
    return data.length * ITEM_HEIGHT
  }, [data, ITEM_HEIGHT])

  const currentViewList = useMemo(() => {
    return data.slice(showRange.start, showRange.end)
  }, [showRange, data])

  const io = useMemo(() => {
    return new IntersectionObserver(entries => {
      if (entries[0].intersectionRatio > 0) scrollToBottom()
    }, {})
  }, [scrollToBottom])

  useEffect(() => {
    const loadMoreRefCurrent = loadMoreRef.current
    io.observe(loadMoreRefCurrent)
    return () => {
      io.unobserve(loadMoreRefCurrent)
      // 关闭观察器
      io.disconnect()
    }
  }, [io])

  const calculateRange = () => {
    const element = containerRef.current
    if (element) {
      const offset = Math.floor(element.scrollTop / ITEM_HEIGHT)
      const startSize = offset - PRE_LOAD_COUNT
      const endSize = offset + VIEW_ITEM_SIZE + PRE_LOAD_COUNT
      setShowRange({
        start: Math.max(0, startSize),
        end: Math.min(data.length, endSize),
      })
    }
  }

  const onContainerScroll = event => {
    event.preventDefault()
    calculateRange()
  }

  const scrollViewOffset = useMemo(() => {
    return showRange.start * ITEM_HEIGHT
  }, [showRange.start, ITEM_HEIGHT])
  return (
    <div
      ref={containerRef}
      style={{
        height: SCROLL_VIEW_HEIGHT,
        overflow: 'auto',
      }}
      onScroll={onContainerScroll}
    >
      <div
        style={{
          width: '100%',
          height: scrollContentHeight - scrollViewOffset,
          marginTop: scrollViewOffset,
        }}
      >
        {currentViewList.map(item => (
          <div
            style={{
              height: ITEM_HEIGHT,
            }}
            key={item}
          >
            {renderItem(item)}
          </div>
        ))}
      </div>
      <div ref={loadMoreRef} className={styles['load-more']}>
        33333
      </div>
    </div>
  )
}
