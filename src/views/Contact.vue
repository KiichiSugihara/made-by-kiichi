<template>
    <v-app>
        <m-k-top-bar></m-k-top-bar>
        <v-content class="content">
            <h1>Contact</h1>
            <h2>Go to Google Sheet!</h2>
        </v-content>
    </v-app>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MKTopBar from '@/components/MKTopBar.vue'
import MKCard from '@/components/MKCard.vue'
import MKTimeline from '@/components/MKTimeline.vue'

@Component({
    components: {
        MKTopBar,
        MKCard,
        MKTimeline,
    },
})
export default class Contact extends Vue {}
</script>

<style lang="scss" scoped>
.content {
    background-color: #ef504f;
}
</style>
