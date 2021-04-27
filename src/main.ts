import { createApp } from 'vue'

import router from './router/routers'
import App from './App.vue'
import { setupAntd } from './antd-ui'
import VueI18n from './locales/index'

import '../rem.js'
// import 'default-passive-events'
console.log(import.meta.env)
const app = createApp(App)
/* antdv 按需加载 */
setupAntd(app)
/* i18n国际化配置 */
app.use(VueI18n)
app.use(router)
app.mount('#app')
