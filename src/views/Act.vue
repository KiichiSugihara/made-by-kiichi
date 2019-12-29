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
                <m-k-work-card
                    v-for="card in cards"
                    :key="card.id"
                    :cardColor="card.cardMainColor"
                    :textColor="card.cardTextColor"
                    :cardLink="card.cardLink"
                    :logoSrc="card.logoSrc"
                    :imageSrc="card.imageSrc"
                    :projectTitle="card.projectTitle"
                    :projectType="card.projectType"
                    :projectGenre="card.projectGenre"
                ></m-k-work-card>
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
    pageMainColor: string = '#ffffff'
    pageTextColor: string = '#4b4b4b'

    cards = [
        {
            cardMainColor: '#ef504f',
            cardTextColor: '#ffffff',
            cardLink: 'https://scrapbox.io/kii-cafe/made-by-kiichi',
            logoSrc: 'https://i.gyazo.com/489624ddd639471af9932e6055b3d0c6.png',
            imageSrc:
                'https://i.gyazo.com/be152af9f5c274b5b8c73056773ea771.png',
            projectTitle: 'Made by kiichi',
            projectType: 'Portfolio Site in English',
            projectGenre: 'Vue.js/TypeScript/Render',
        },
        {
            cardMainColor: '#1877F2',
            cardTextColor: '#ffffff',
            cardLink:
                'https://scrapbox.io/kii-cafe/Facebook_Developer_Build_Day',
            logoSrc: '',
            imageSrc:
                'https://i.gyazo.com/f407c31b217aac6e0cd4171092d53a8c.png',
            projectTitle: 'Facebook Developer Build Day',
            projectType: 'Sakura Internet Award',
            projectGenre: 'Hackathon/Presentation',
        },
    ]
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
