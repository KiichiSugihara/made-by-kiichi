<template>
  <v-app>
    <m-k-top-bar></m-k-top-bar>
    <v-content class="content">
      <!-- <m-k-background-image></m-k-background-image> -->
    </v-content>
  </v-app>
</template>

<script lang="ts">
import MKBackgroundImage from '@/components/MKBackgroundImage.vue'
import MKTopBar from '@/components/MKTopBar.vue'
import Vue from 'vue'

export default Vue.extend({
  components: {
    MKTopBar,
    MKBackgroundImage,
  },
})
</script>
<style lang="scss" scoped>
.content{
  background-color: #F6EFE4;
}

</style>>
