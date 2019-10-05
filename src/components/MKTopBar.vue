<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>Made by Kiichi</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-btn text>Career</v-btn>
        <v-btn text>Act</v-btn>
        <v-btn text>Links</v-btn>
      </v-toolbar-items>

      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn icon>
          <v-icon>mdi-export-variant</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-delete-circle</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
      </template>
    </v-toolbar>
  </div>
</template>


<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>
