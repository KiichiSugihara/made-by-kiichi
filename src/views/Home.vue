<template>
  <v-app>
    <m-k-top-bar></m-k-top-bar>
    <v-content>
      <m-k-background-image></m-k-background-image>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "../components/HelloWorld.vue";
import MKTopBar from "@/components/MKTopBar.vue";
import MKBackgroundImage from "@/components/MKBackgroundImage.vue";

export default Vue.extend({
  components: {
    HelloWorld,
    MKTopBar,
    MKBackgroundImage
  }
});
</script>
