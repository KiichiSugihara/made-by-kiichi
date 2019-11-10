<template>
    <v-app>
        <m-k-top-bar></m-k-top-bar>
        <v-content class="content">
            <h1>Who</h1>
            <div class="career-container">
                <m-k-timeline></m-k-timeline>
            </div>
        </v-content>
    </v-app>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MKTimeline from '@/components/MKTimeline.vue'
import MKTopBar from '@/components/MKTopBar.vue'

@Component({
    components: {
        MKTopBar,
        MKTimeline,
    },
})
export default class Who extends Vue {}
</script>

<style lang="scss" scoped>
.content {
    background-color: #ef504f;
}
</style>
