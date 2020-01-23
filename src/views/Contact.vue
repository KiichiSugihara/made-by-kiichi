<template>
    <v-app>
        <m-k-top-bar
            :mainColor="this.pageMainColor"
            :textColor="this.pageTextColor"
        ></m-k-top-bar>
        <v-content
            :style="{
                '--page-main-color': this.pageMainColor,
                '--page-text-color': this.pageTextColor,
            }"
        >
        </v-content>
    </v-app>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MKTopBar from '@/components/MKTopBar.vue'
import MKCard from '@/components/MKCard.vue'
import MKTimeline from '@/components/MKTimeline.vue'

@Component({
    components: {
        MKTopBar,
        MKCard,
        MKTimeline,
    },
})
export default class Contact extends Vue {
    pageMainColor: string = '#ffffff'
    pageTextColor: string = '#4b4b4b'
}
</script>

<style lang="scss" scoped></style>
