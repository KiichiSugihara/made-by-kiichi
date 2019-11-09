<template>
    <v-app>
        <m-k-top-bar></m-k-top-bar>
        <v-content class="content">
            <h1>Act</h1>
            <m-k-card></m-k-card>
            <m-k-card></m-k-card>
        </v-content>
    </v-app>
</template>
<script lang="ts">
import MKCard from '@/components/MKCard.vue'
import MKTopBar from '@/components/MKTopBar.vue'
import Vue from 'vue'

export default Vue.extend({
    components: {
        MKTopBar,
        MKCard,
    },
})
</script>

<style lang="scss" scoped>
.content {
    background-color: #5acd7d;
}
</style>
