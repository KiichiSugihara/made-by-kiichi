<template>
    <v-app>
        <m-k-top-bar></m-k-top-bar>
        <v-content class="content">
            <div class="home-title-container">
                <div class="home-title-box">
                    <h1 class="home-title-text">
                        <div>Kiichi Sugihara</div>
                        <div>made-by-kichi</div>
                    </h1>
                </div>
            </div>
            <div class="act-container">
                Act
                <m-k-card></m-k-card>
                <m-k-card></m-k-card>
            </div>
            <div class="career-container">Creer</div>
        </v-content>
    </v-app>
</template>

<script lang="ts">
import MKTopBar from '@/components/MKTopBar.vue'
import MKCard from '@/components/MKCard.vue'
import Vue from 'vue'

export default Vue.extend({
    components: {
        MKTopBar,
        MKCard,
    },
})
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');

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
    color: #333333;
    font-size: 2.6rem;
    font-weight: 700;
    line-height: 4rem;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.content {
    background-color: #fdce12;
}
</style>
