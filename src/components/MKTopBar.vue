<template>
  <div>
    <v-app-bar :color="barColor" :flat='flat' dark >
      <router-link :to="{ name: 'home'}">
        <v-toolbar-title class="title-button">Made by Kiichi</v-toolbar-title>
      </router-link>

      <div class="flex-grow-1"></div>
       <router-link :to="{ name: 'home'}">
        <v-toolbar-title class="nav-button">Act</v-toolbar-title>
      </router-link>
       <router-link :to="{ name: 'home'}">
        <v-toolbar-title class="nav-button">Who</v-toolbar-title>
      </router-link> <router-link :to="{ name: 'home'}">
        <v-toolbar-title class="nav-button">Contact
        </v-toolbar-title>
      </router-link>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    barColor: '#F6EFE4',
    flat:true,
  }),
})
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Mansalva&display=swap');

.title-button {
  font-family: 'Mansalva', cursive;
  color: #437ab5;
}
// https://stackoverflow.com/questions/44808474/vue-router-how-to-remove-underline-from-router-link/56443074#56443074
a {  text-decoration: none;}

.nav-button {
color: #437ab5;
font-family: 'Mansalva', cursive;
    display: block;
    line-height: 1.6rem;
    font-weight: 700;
    outline: none!important;
    padding: .4rem;
    position: relative;
    transition: color .25s cubic-bezier(.625,.125,.305,.875),opacity .25s cubic-bezier(.625,.125,.305,.875);
padding: .675rem .8rem;
}
</style>>
