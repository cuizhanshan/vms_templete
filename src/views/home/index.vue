<template>
<a-button type="primary">{{$t('header_menu.loginBtn')}}</a-button>
</template>

<script lang="ts">
import {
  ref,
  defineComponent
} from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  setup: ():object => {
    const count = ref<number>(0)
    return {
      count
    }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
