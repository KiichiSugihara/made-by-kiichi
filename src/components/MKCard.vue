<template>
    <v-card class="mx-auto mk-card-container" max-width="344">
        <v-card-text>
            <div>Word of the Day</div>
            <p class="display-1 text--primary">be•nev•o•lent</p>
            <p>adjective</p>
            <div class="text--primary">
                well meaning and kindly.
                <br />"a benevolent smile"
            </div>
        </v-card-text>
        <v-card-actions>
            <v-btn text color="accent-4">Learn More</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Mansalva&display=swap');

.mk-card-container {
    background-color: #5acd7d;
    max-width: 344px;
    height: 18rem;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 18px 0px;
    padding: 3rem 1.5rem;
    border-radius: 14px;
}
</style>>
