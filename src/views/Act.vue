<template>
    <v-app>
        <m-k-top-bar :mainColor="this.pageMainColor" :textColor="this.pageTextColor"></m-k-top-bar>
        <v-content
            :style="{'--page-main-color': this.pageMainColor,'--page-text-color':this.pageTextColor}"
        >
            <div class="content">
                <div class="act-title-container">
                    <div class="act-title-box">
                        <h1 class="act-title-text">
                            <div class="act-text">{{ actTitle }}</div>
                            <div class="act-text">{{ actSubTitle }}</div>
                        </h1>
                    </div>
                </div>
                <m-k-work-card :cardColor="this.cardMainColor" :textColor="this.cardTextColor"></m-k-work-card>
                <m-k-work-card :cardColor="this.cardMainColor" :textColor="this.cardTextColor"></m-k-work-card>
                <m-k-work-card :cardColor="this.cardMainColor" :textColor="this.cardTextColor"></m-k-work-card>
                <m-k-work-card :cardColor="this.cardMainColor" :textColor="this.cardTextColor"></m-k-work-card>
                <m-k-work-card :cardColor="this.cardMainColor" :textColor="this.cardTextColor"></m-k-work-card>
                <m-k-work-card :cardColor="this.cardMainColor" :textColor="this.cardTextColor"></m-k-work-card>
                <m-k-work-card :cardColor="this.cardMainColor" :textColor="this.cardTextColor"></m-k-work-card>
            </div>
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
    actTitle: string = 'Kiichi Sugihara'
    actSubTitle: string = "Solve anyone's problem & fullfill my curiosity"
    pageMainColor: String = '#ffffff'
    pageTextColor: String = '#4b4b4b'
    cardMainColor: String = '#ef504f'
    cardTextColor: String = '#ffffff'
}
</script>

<style lang="scss" scoped>
.content {
    background-color: var(--page-main-color);
    padding: 0 1.5rem;
}

.act-title-container {
    color: currentColor;
    text-align: center;
    padding: 8rem 0px;
}
.act-title-box {
    color: currentColor;
    position: relative;
    max-width: 68rem;
    margin: 0px auto;
    padding: 0px 1.5rem;
}
.act-title-text {
    font-family: 'Josefin Sans', sans-serif;
    color: black;
    font-size: 2.6rem;
    font-weight: 700;
    line-height: 4rem;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.act-text {
    color: var(--page-text-color);
}
</style>
