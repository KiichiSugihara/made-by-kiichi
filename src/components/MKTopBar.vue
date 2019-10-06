<template>
  <div>
    <v-app-bar :color="barColor" :flat='flat' dark >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <router-link :to="{ name: 'home'}">
        <v-toolbar-title class="title-button">Made-by-Kiichi</v-toolbar-title>
      </router-link>

      <div class="flex-grow-1"></div>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    barColor: '#ee5050',
    flat:true,
  }),
})
</script>

<style lang="scss" scoped>

.title-button {
  color: aliceblue;
}
// https://stackoverflow.com/questions/44808474/vue-router-how-to-remove-underline-from-router-link/56443074#56443074
a {  text-decoration: none;}
</style>>
