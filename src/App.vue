<template>
<a-config-provider :locale="antdLocale">
  <!-- <a-select default-value="zhCN" v-model:value="$i18n.locale" style="width: 120px" @change="handleChange">
    <a-select-option value="zhCN">
      中文
    </a-select-option>
    <a-select-option value="en">
      English
    </a-select-option>
  </a-select>
  <a-transfer :data-source="[]" show-search :target-keys="[]" :render="item => item.title" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <Breads></Breads>
  <div class="box2">{{ $t('header_menu.logout')}}</div> -->
  <router-view></router-view>
</a-config-provider>
</template>

<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  ref
} from 'vue'
import enUS from 'ant-design-vue/es/locale/en_US';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import HelloWorld from '@/components/HelloWorld.vue'
import Breads from '@/components/Breads.vue'
interface data {
  antdLocale: object
}

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Breads
  },
  setup(props: object, context: object) {
    let {
      proxy
    }: any = getCurrentInstance()
    const antdLocale = ref<any>(zhCN)
    const handleChange = (e: any) => {
      antdLocale.value = e === 'zhCN' ? zhCN : enUS
    }
    return {
      proxy,
      zhCN,
      enUS,
      antdLocale,
      handleChange
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.box2 {
  height: 200px;
  width: 200px;
  background: cyan;
}
</style>
