<template>
    <a
        :href="this.cardLink"
        class="mk-work-card__item"
        data-history="project"
        target="_blank"
        :style="{'--card-color': this.cardColor,'--text-color': this.textColor}"
    >
        <div class="mk-work-card__left">
            <img class="mk-work-card__logo" :src="this.logoSrc" />
            <h2 class="mk-work-card__title">{{ projectTitle }}</h2>
            <p class="mk-work-card__details">
                <span class="mk-work-card__type">{{ projectType }}</span>
                <span class="mk-work-card__genre">{{ projectGenre }}</span>
            </p>
        </div>
        <div class="mk-work-card__right">
            <img class="mk-work-card__img" :src="this.imageSrc" />
        </div>
    </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class MKWorkCard extends Vue {
    @Prop({})
    cardColor!: string

    @Prop({})
    textColor!: string

    @Prop({})
    cardLink!: string

    @Prop({})
    logoSrc!: string

    @Prop({})
    imageSrc!: string

    @Prop({ default: 'Project Title' })
    projectTitle!: string

    @Prop({ default: 'Project Type' })
    projectType!: string

    @Prop({ default: 'Project Genre' })
    projectGenre!: string
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Mansalva&display=swap');

.mk-work-card__item {
    z-index: 200;
    border-radius: 0.2rem;
    box-shadow: rgba(0, 0, 0, 0.15) 0 1.6rem 4.75rem;
    background-color: var(--card-color);
    color: var(--text-color);
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    margin: 0 auto 1.5rem;
    min-height: 40vw;
    min-width: height;
    overflow: hidden;
    padding: 0 1.5rem;
    position: relative;
    text-align: left;
    transition: -webkit-transform 0.25s cubic-bezier(0.625, 0.125, 0.305, 0.875);
    transition: transform 0.25s cubic-bezier(0.625, 0.125, 0.305, 0.875);
    transition: transform 0.25s cubic-bezier(0.625, 0.125, 0.305, 0.875),
        -webkit-transform 0.25s cubic-bezier(0.625, 0.125, 0.305, 0.875);
}
.mk-work-card__left {
    z-index: 220;
    height: 100%;
    display: contents;
    flex-direction: column;
}

.mk-work-card__logo {
    z-index: 221;
    margin: 0 auto 0 0;
    width: 100px;
    padding-top: 1.5rem;
    position: absolute;
}
.mk-work-card__title {
    z-index: 221;
    line-height: 1.3;
    padding-bottom: 32px;
    margin: auto 0 auto 0;
    transition: -webkit-transform 0.25s;
    -webkit-transition: -webkit-transform 0.25s;
    transition: transform 0.25s;
    transition: transform 0.25s, -webkit-transform 0.25s;
    font-weight: 600;
    font-family: 'AvantGardeGothicITCW01Bd', sans-serif;
    -webkit-font-feature-settings: 'liga' 1, 'kern' 1;
    font-feature-settings: 'liga' 1, 'kern' 1;
    letter-spacing: -0.05em;
}

.mk-work-card__details {
    z-index: 221;
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
}

.mk-work-card__type {
    z-index: 221;
    margin-bottom: 0.2rem;
}
.mk-work-card__img {
    z-index: 210;
    background: left center no-repeat;
    background-size: cover;
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
}
</style>>
