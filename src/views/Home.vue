<template>
  <HelloWorld />
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
