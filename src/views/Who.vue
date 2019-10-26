<template>
  <v-app>
    <m-k-top-bar></m-k-top-bar>
    <v-content class="content">
      <h1>Who</h1>
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

<style lang="scss" scoped>
.content{
  background-color: #F6EFE4;
}

</style>
