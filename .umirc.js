import { defineConfig } from 'umi'
import px2rem from 'postcss-plugin-px2rem'

const path = require('path')
const VersionFile = require('webpack-version-file-plugin')

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
  chainWebpack(memo) {
    memo.plugin('VersionFile').use(
      new VersionFile({
        packageFile: path.join(__dirname, 'package.json'),
        template: path.join(__dirname, 'version.ejs'),
        outputFile: path.join(__dirname, 'dist', 'version.json'),
      }),
    )
  },
})
