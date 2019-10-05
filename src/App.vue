<template>
  <v-app>
    <m-k-top-bar></m-k-top-bar>
    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import MKTopBar from "@/components/MKTopBar.vue";

export default Vue.extend({
  name: "App",
  components: {
    HelloWorld,
    MKTopBar
  },
  data: () => ({
    //
  })
});
</script>
