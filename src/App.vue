<template>
  <div id="app">
    <router-view></router-view>
  </div>
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
