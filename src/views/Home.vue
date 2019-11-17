<template>
    <v-app class="page">
        <m-k-top-bar></m-k-top-bar>
        <v-content class="content">
            <div class="home-title-container">
                <div class="home-title-box">
                    <h1 class="home-title-text">
                        <div>{{homeTitle}}</div>
                        <div>{{homeSubTitle}}</div>
                    </h1>
                </div>
            </div>
            <div class="career-container">
                Career
                <m-k-timeline></m-k-timeline>
            </div>
        </v-content>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MKCard from '@/components/MKCard.vue'
import MKTimeline from '@/components/MKTimeline.vue'
import MKTopBar from '@/components/MKTopBar.vue'

@Component({
    components: {
        MKTopBar,
        MKCard,
        MKTimeline,
    },
})
export default class Home extends Vue {
    homeTitle: string = 'Kiichi Sugihara'
    homeSubTitle: string = "Solve anyone's problem & fullfill my curiosity"
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');

.page {
    background-color: #ef504f;
    padding: 0 8px;
}

.home-title-container {
    // display: flex;
    // justify-content: center;
    text-align: center;
    padding: 8rem 0px;
}
.home-title-box {
    position: relative;
    max-width: 68rem;
    margin: 0px auto;
    padding: 0px 1.5rem;
}
.home-title-text {
    font-family: 'Josefin Sans', sans-serif;
    color: #ffffff;
    font-size: 2.6rem;
    font-weight: 700;
    line-height: 4rem;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.content {
    background-color: #ef504f;
}
</style>
