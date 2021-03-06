module.exports = {
  pages:{
    index:{
      // 入口
      entry:'src/main.js'
    }
  },
  lintOnSave:false, // 关闭语法检查
  devServer:{
    proxy:{
      '/api':{
        target:'http://localhost:4000',
        pathRewrite:{'^/api':''},
        // ws: true, // 用于支持websocket
        // changeOrigin: true // 用于控制请求头中host值
      }
    }
  }
}
