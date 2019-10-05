<template>
  <v-app>
    <m-k-top-bar></m-k-top-bar>
    <v-content>
      <!-- <v-row align="center" justify="center"> -->
      <v-img
        src="https://picsum.photos/id/11/500/300"
        lazy-src="https://picsum.photos/id/11/10/6"
        aspect-ratio="1"
        class="grey lighten-2"
        max-width="500"
        max-height="300"
      ></v-img>
      <!-- </v-row> -->
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "../components/HelloWorld.vue";
import MKTopBar from "@/components/MKTopBar.vue";

export default Vue.extend({
  components: {
    HelloWorld,
    MKTopBar
  }
});
</script>
