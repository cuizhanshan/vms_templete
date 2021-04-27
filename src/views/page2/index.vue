<template>
<div>
  <a-breadcrumb :routes="routes">
    <template #itemRender="{ route, routes, paths }">
      <span v-if="routes.indexOf(route) === routes.length - 1">
        {{ route.breadcrumbName }}
      </span>
      <router-link v-else :to="`${basePath}/${paths.join('/')}`">
        {{ route.breadcrumbName }}
      </router-link>
    </template>
  </a-breadcrumb>
  <br />
</div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  getCurrentInstance
} from 'vue';
interface Route {
  path: string;
  breadcrumbName: string;
  children ? : Array < {
    path: string;
    breadcrumbName: string;
  } > ;
}
export default defineComponent({
  setup() {
    console.log()
    const {
      proxy
    }: any = getCurrentInstance()
    console.log(proxy)
    const routes = ref < Route[] > ([{
        path: '/',
        breadcrumbName: '首页'
      },
      {
        path: '/page2',
        breadcrumbName: '第二页'
      }
    ]);
    return {
      basePath: '',
      routes,
    };
  },
});
</script>
