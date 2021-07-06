import styles from './index.less'
import classNames from 'classnames'

export const Row = ({ gap, wrap = true, justify = 'start', align = 'top', children }) => {
  const computedClassName = classNames(
    styles.row,
    { [styles.wrap]: wrap },
    styles[justify],
    styles[align],
  )
  return (
    <div className={computedClassName} style={{ rowGap: `${gap}px` }}>
      {children}
    </div>
  )
}

export const Col = ({ flex, span, offset, children }) => {
  let flexObj = {}
  if (flex) {
    flexObj = { flex }
  } else if (span) {
    const rate = ((span / 24) * 100).toFixed(6)
    flexObj = { flex: `0 0 ${rate}%`, maxWidth: `${rate}%` }
  }
  if (offset) {
    flexObj.marginLeft = `${((offset / 24) * 100).toFixed(6)}%`
  }
  return <div style={flexObj}>{children}</div>
}
