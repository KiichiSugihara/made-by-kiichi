<template>
    <v-card
        class="mx-auto mk-card-container"
        max-width="344"
        :style="{'--card-color': this.cardColor,'--text-color': this.textColor}"
    >
        <v-card-text>
            <div class="text-color">Word of the Day</div>
            <p class="text-color display-1">be•nev•o•lent</p>
            <p class="text-color">adjective</p>
            <div class="text-color">
                well meaning and kindly.
                <br />"a benevolent smile"
            </div>
        </v-card-text>
        <v-card-actions>
            <v-btn text class="mk-card-action-text">Learn More</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class MKCard extends Vue {
    @Prop({ default: '#ef504f' })
    cardColor!: String

    @Prop({ default: '#ffffff' })
    textColor!: String
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Mansalva&display=swap');

.mk-card-container {
    background-color: var(--card-color);
    max-width: 344px;
    height: 18rem;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 18px 0px;
    padding: 3rem 1.5rem;
    border-radius: 14px;
}
.mk-card-action-text {
    color: var(--text-color);
}
.text-color {
    color: var(--text-color);
}
</style>>
