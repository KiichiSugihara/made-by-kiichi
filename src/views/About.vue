<template>
  <v-app>
    <m-k-top-bar></m-k-top-bar>
    <v-content>
      <h1>About!!!!!</h1>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import MKTopBar from '@/components/MKTopBar.vue'
import Vue from 'vue'

export default Vue.extend({
    components: {
        MKTopBar,
    },
})
</script>
