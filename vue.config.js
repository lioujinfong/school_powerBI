const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  outputDir: './dist',
  devServer: {
    host: '0.0.0.0',
    port: 8787,
    allowedHosts: 'all',
  },
  publicPath: '/school_powerBI/'
})
