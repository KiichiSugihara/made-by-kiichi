<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import MKTopBar from '@/components/MKTopBar.vue'
import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default Vue.extend({
    name: 'App',
    components: {
        HelloWorld,
        MKTopBar,
    },
    data: () => ({
        //
    }),
})
</script>
