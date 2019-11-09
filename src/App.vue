<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import '@/styles/global.css'

export default Vue.extend({
    name: 'App',
    components: {},
    data: () => ({
        //
    }),
})
</script>
