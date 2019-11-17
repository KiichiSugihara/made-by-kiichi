<template>
    <v-app>
        <m-k-top-bar></m-k-top-bar>
        <v-content class="content">
            <m-k-card></m-k-card>
            <m-k-card></m-k-card>
            <m-k-card></m-k-card>
            <m-k-card></m-k-card>
            <m-k-card></m-k-card>
            <m-k-card></m-k-card>
            <m-k-card></m-k-card>
            <m-k-card></m-k-card>
            <m-k-card></m-k-card>
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
export default class Act extends Vue {
    homeTitle: string = 'Kiichi Sugihara'
    homeSubTitle: string = "Solve anyone's problem & fullfill my curiosity"
}
</script>

<style lang="scss" scoped>
.content {
    background-color: #ef504f;
}
</style>
