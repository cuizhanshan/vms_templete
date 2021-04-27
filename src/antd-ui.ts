import {
  Button,
  Card,
  message,
  Breadcrumb,
  Select,
  ConfigProvider,
  Transfer,
} from 'ant-design-vue'

const plugins = [Button, Card, Breadcrumb, Select, ConfigProvider, Transfer]

export const setupAntd = (app: any, options = {}) => {
  app.config.globalProperties.$message = message
  plugins.forEach((plugin) => {
    app.use(plugin)
  })
}
