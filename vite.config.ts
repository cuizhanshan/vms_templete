import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import { resolve } from 'path'

const PostcssPxtorem = require('postcss-pxtorem')
const autoprefixer = require('autoprefixer')

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // 设置 `@` 指向 `src` 目录
    },
  },
  base: './', // 设置打包路径
 
  plugins: [
    vue(),
    // antdv 样式按需加载
    styleImport({
      libs: [
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: (name) => {
            return `ant-design-vue/es/${name}/style/index`
          },
        },
      ],
    }),
  ],
  // 这一段不配置的话会出现less文件请求报500的错误
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // 更改主题在这里
          // 'primary-color': '#52c41a',
          // 'link-color': '#1DA57A',
          // 'border-radius-base': '2px',
        },
        javascriptEnabled: true,
      },
    },
    postcss: {
      plugins: [
        autoprefixer({
          // 配置使用 autoprefixer
          overrideBrowserslist: [
            '> 1%',
            'last 2 versions',
            'not ie <= 8',
            'ios >= 8',
            'android >= 4.0',
            'firefox >= 8',
            'chrome >= 24',
            'Opera>=10',
          ],
        }),
        PostcssPxtorem({
          rootValue: 16, // 换算的基数
          replace: true,
          propList: ['*'],
          // exclude: /node_modules/,
        }),
      ],
    },
  },
  build: {
    // 去除console
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3030, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    https: false,
    cors: true, // 允许跨域

    // 设置代理，根据我们项目实际情况配置
    proxy: {
      '/api': {
        target: 'http://localhost:8080/payrolle',
        // target: 'http://192.168.1.199:8080/payrolle',
        // target: 'http://192.168.1.192:8080/payrolle',
        // target: 'http://t.smartpayroll.cn/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  optimizeDeps: {
    // TODO
    /* 莫名其妙的报错,此方法可以解决
    *  issue: https://github.com/vitejs/vite/issues/334
    */
    include: ['warning/warning.js'],
  },
})
