import wx from '@/util/wx'

const isDev = process.env.NODE_ENV === 'development'

if (!isDev) {
  wx()
}
