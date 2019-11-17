<template>
    <div>
        <v-app-bar
            :color="barColor"
            :flat="flat"
            dark
            :elevate-on-scroll="elevateOnScroll"
            :shrink-on-scroll="shrinkOnScroll"
            class="m-k-top-bar-header"
        >
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
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class MKTopBar extends Vue {
    barColor = '#EF504F'
    flat = true
    elevateOnScroll = true
    shrinkOnScroll = true
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Mansalva&display=swap');

.title-button {
    font-family: 'Mansalva', cursive;
    color: #ffffff;
}
// https://stackoverflow.com/questions/44808474/vue-router-how-to-remove-underline-from-router-link/56443074#56443074
a {
    text-decoration: none;
}

.m-k-top-bar-header {
    position: fixed;
    top: 0;
    padding: 2.5rem 1.1rem 0 0;
    z-index: 100;
}

.nav-button {
    color: #ffffff;
    font-family: 'Mansalva', cursive;
    display: block;
    line-height: 1.6rem;
    font-weight: 700;
    outline: none !important;
    background-color: #ef504f;
    padding: 0.675rem 0.8rem;
    position: relative;
    transition: color 0.25s cubic-bezier(0.625, 0.125, 0.305, 0.875),
        opacity 0.25s cubic-bezier(0.625, 0.125, 0.305, 0.875);
    padding: 0.675rem 0.8rem;
}
</style>>
