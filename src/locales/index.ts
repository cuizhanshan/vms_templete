//i18n locale配置
import { createI18n } from 'vue-i18n' //引入vue-i18n组件
import zhCN from './zh_cn'
import en from './en'

//注册i8n实例并引入语言文件
const i18n = createI18n({
  locale: 'zhCN', //默认显示的语言
  messages: {
    zhCN, // 中文
    en, // 英文
  },
})
export default i18n //将i18n暴露出去，在main.js中引入挂载
