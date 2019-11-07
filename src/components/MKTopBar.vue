<template>
    <div>
        <v-app-bar :color="barColor" :flat="flat" dark>
            <router-link :to="{ name: 'home'}">
                <v-toolbar-title class="title-button">Made by Kiichi</v-toolbar-title>
            </router-link>

            <div class="flex-grow-1"></div>
            <router-link :to="{ name: 'act'}">
                <v-toolbar-title class="nav-button">Act</v-toolbar-title>
            </router-link>
            <router-link :to="{ name: 'who'}">
                <v-toolbar-title class="nav-button">Who</v-toolbar-title>
            </router-link>
            <router-link :to="{ name: 'contact'}">
                <v-toolbar-title class="nav-button">Contact</v-toolbar-title>
            </router-link>
        </v-app-bar>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data: () => ({
        barColor: '#fdce12',
        flat: true,
    }),
})
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Mansalva&display=swap');

.title-button {
    font-family: 'Mansalva', cursive;
    color: #333333;
}
// https://stackoverflow.com/questions/44808474/vue-router-how-to-remove-underline-from-router-link/56443074#56443074
a {
    text-decoration: none;
}

.nav-button {
    color: #333333;
    font-family: 'Mansalva', cursive;
    display: block;
    line-height: 1.6rem;
    font-weight: 700;
    outline: none !important;
    padding: 0.4rem;
    position: relative;
    transition: color 0.25s cubic-bezier(0.625, 0.125, 0.305, 0.875),
        opacity 0.25s cubic-bezier(0.625, 0.125, 0.305, 0.875);
    padding: 0.675rem 0.8rem;
}
</style>>
