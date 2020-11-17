import { wxSignature } from '@/service'

export default async () => {
  const url = window.location.href.split('#')[0]
  const res = await wxSignature({
    url,
  })
  wx.config({
    appId: res.appId,
    timestamp: res.timestamp,
    nonceStr: res.noncestr,
    signature: res.signature,
    jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'],
  })

  wx.ready(() => {
    const shareInfo = {
      title: wxShareInfo.title, // 分享标题
      link: window.location.href, // 分享链接
      imgUrl: wxShareInfo.imgUrl, // 分享图标
      desc: wxShareInfo.desc, // 分享内容
      suuccess: () => {
        // 分享成功
      },
    }
    wx.updateAppMessageShareData(shareInfo)
    wx.updateTimelineShareData(shareInfo)
  })

  wx.error(err => {
    console.error('config 错误:', err)
  })
}
