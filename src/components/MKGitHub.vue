<template>
    <div class="grass-container grass">
        <a href="https://github.com/KiichiSugihara" target="_blank">
            <img src="https://grass-graph.moshimo.works/images/KiichiSugihara.png?background=none" />
        </a>
        <!-- <div class="grass">GizaGiza</div> -->
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class MKGitHub extends Vue {}
</script>

<style lang="scss" scoped>
.grass-container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.grass {
    padding: 1em;
    background: linear-gradient(-135deg, #ffffff 16px, transparent 0) 0 16px,
        linear-gradient(135deg, #ffffff 16px, #5acd7d 0) 0 16px;
    background-position: left bottom !important;
    background-repeat: repeat-x !important;
    background-size: 32px 32px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
}
// スマホは表示しない
</style>
