<template>
    <v-app>
        <m-k-top-bar :mainColor="this.pageMainColor" :textColor="this.pageTextColor"></m-k-top-bar>
        <v-content class="content" :style="{'--color': this.pageMainColor}">
            <div class="career-container"></div>
            <m-k-git-hub></m-k-git-hub>
        </v-content>
    </v-app>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MKTimeline from '@/components/MKTimeline.vue'
import MKTopBar from '@/components/MKTopBar.vue'
import MKGitHub from '@/components/MKGitHub.vue'

@Component({
    components: {
        MKTopBar,
        MKTimeline,
        MKGitHub,
    },
})
export default class Who extends Vue {
    pageMainColor: string = '#5acd7d'
    pageTextColor: string = '#4b4b4b'
}
</script>

<style lang="scss" scoped>
.content {
    background-color: var(--color);
}
</style>
