import wx from '@/util/wx'
import flex from 'umi-hd/lib/flex'
import 'antd-mobile/es/index.css'

flex(100, 1)

const isDev = process.env.NODE_ENV === 'development'

if (!isDev) {
  wx()
}
