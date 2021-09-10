import { defineConfig } from 'umi'
export default defineConfig({
  publicPath: '/',
  proxy: {
    '/bff': {
      target: 'http://server.json',
      changeOrigin: true,
    },
    '/api': {
      target: 'http://server1.json',
      changeOrigin: true,
    },
  },
  devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: true,
      },
    },
  },
})
