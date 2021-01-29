import * as React from 'react'
import { unstable_Icon as Icon } from '@ant-design/mobile'

const IconFont = Icon.createFromIconfontCN('//at.alicdn.com/t/font_2045500_emuhusceav7.js')
export default ({ type, size = 'sm', color = '#000' }) => (
  <IconFont type={`icon${type}`} color={color} size={size} />
)
