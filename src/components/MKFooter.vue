<template>
    <v-footer padless="padless" class="m-k-footer">
        <v-card flat tile width="100%" class="red lighten-1 text-center">
            <v-card-text>
                <v-btn
                    class="mx-4"
                    icon
                    href="https://github.com/KiichiSugihara"
                    target="_blank"
                >
                    <v-icon size="24px">fab fa-github-alt</v-icon>
                </v-btn>
                <v-btn
                    class="mx-4"
                    icon
                    href="https://www.facebook.com/KiichiSugihara"
                    target="_blank"
                >
                    <v-icon size="24px">fab fa-facebook-f</v-icon>
                </v-btn>
                <v-btn
                    class="mx-4"
                    icon
                    href="https://twitter.com/kiichi_sugihara"
                    target="_blank"
                >
                    <v-icon size="24px">fab fa-twitter</v-icon>
                </v-btn>
                <v-btn
                    class="mx-4"
                    icon
                    href="https://www.linkedin.com/in/kiichi-sugihara/"
                    target="_blank"
                >
                    <v-icon size="24px">fab fa-linkedin-in</v-icon>
                </v-btn>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text>
                {{ new Date().getFullYear() }} —
                <strong>Kiichi Sugihara</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class MKFooter extends Vue {
    icons = [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram',
    ]
    items = ['default', 'absolute', 'fixed']
    padless = false
    variant = 'default'
}
</script>

<style lang="scss" scoped>
.m-k-footer {
    background: #ee5050;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    min-height: 6rem;
    padding: 1rem 0;
    position: relative;
    text-align: center;
}
</style>
