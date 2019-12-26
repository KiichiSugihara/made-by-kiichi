<template>
    <v-app>
        <m-k-top-bar :mainColor="this.pageMainColor" :textColor="this.pageTextColor"></m-k-top-bar>
        <v-content class="content" :style="{'--color': this.pageMainColor}">
            <m-k-card :cardColor="this.pageMainColor" :textColor="this.pageTextColor"></m-k-card>

            <m-k-work-card :cardColor="this.pageMainColor" :textColor="this.pageTextColor"></m-k-work-card>
        </v-content>
    </v-app>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MKTopBar from '@/components/MKTopBar.vue'
import MKCard from '@/components/MKCard.vue'
import MKWorkCard from '@/components/MKWorkCard.vue'
import MKTimeline from '@/components/MKTimeline.vue'

@Component({
    components: {
        MKTopBar,
        MKCard,
        MKWorkCard,
        MKTimeline,
    },
})
export default class Act extends Vue {
    homeTitle: string = 'Kiichi Sugihara'
    homeSubTitle: string = "Solve anyone's problem & fullfill my curiosity"
    pageMainColor: String = '#ffffff'
    pageTextColor: String = '#4b4b4b'
}
</script>

<style lang="scss" scoped>
.content {
    background-color: var(--color);
}
</style>
