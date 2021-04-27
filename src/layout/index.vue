<template>
<a-select default-value="zhCN" v-model:value="$i18n.locale" style="width: 120px" @change="handleChange">
  <a-select-option value="zhCN">
    中文
  </a-select-option>
  <a-select-option value="en">
    English
  </a-select-option>
</a-select>
<a-select style="width: 120px" @change="routerChange">
  <a-select-option :value="route.path" v-for="route in displayRouters" :key="route.name">
    {{$t(`${route.name}`)}}
  </a-select-option>
  <!-- <a-select-option value="/page2">
    page2
  </a-select-option> -->
</a-select>
<router-view></router-view>
</template>

<script lang="ts">
import { getCurrentInstance, ref, computed } from 'vue'
export default {
  setup: (props) => {
    const { proxy }:any = getCurrentInstance()
    const routers = ref(proxy.$router.getRoutes())
    const displayRouters = computed(() => {
      return routers.value.filter((val:object) => {
        return !!(val as any).name
      })
    })
    
    const routerChange = (e:any) => {
      proxy.$router.push(e)
    }
    return {
      routerChange,
      routers,
      displayRouters
    }
  }
}
</script>
