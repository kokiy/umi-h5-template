import { defineConfig } from 'umi'
import px2rem from 'postcss-plugin-px2rem'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  headScripts: ['//res.wx.qq.com/open/js/jweixin-1.6.0.js'],
  define: {
    wxShareInfo: {
      title: '',
      imgUrl: '',
      desc: '',
    },
  },
  extraPostCSSPlugins: [
    px2rem({
      rootValue: 50,
      propBlackList: [],
      selectorBlackList: ['t_npx'],
    }),
  ],
})
