<template>
    <v-timeline>
        <v-timeline-item
            v-for="(time, i) in times"
            :key="i"
            :color="time.color"
            small
            :right="right"
        >
            <template v-slot:opposite>
                <span :class="`headline font-weight-bold ${time.color}--text`" v-text="time.time"></span>
            </template>
            <div class="py-4">
                <h2
                    :class="`headline mb-4 ${time.color}--text`"
                    class="m-k-timeline-title"
                >{{time.title}}</h2>
                <h3 class="m-k-timeline-sub-title">{{time.subTitle}}</h3>
                <div>{{time.text}}</div>
                <div>{{time.subText}}</div>
            </div>
        </v-timeline-item>
    </v-timeline>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class MKTimeline extends Vue {
    right = true
    times = [
        {
            color: 'white',
            time: '2020/02',
            title: 'Now',
        },
        {
            color: 'white',
            time: '2019/09',
            title: 'Consensus Base.inc ',
            subTitle: 'Blockchain Engineer',
            text:
                'Work:Development of Blockchain Application using Solidity,Truffle,Node.js,Azure,etc ',
            subText: '',
        },
        {
            color: 'white',
            time: '2019/04',
            title: 'Oro.inc',
            subTitle: 'Front-end Engineer',
            text:
                'Work: UI / UX design and development of web front end for mobile mainly using Vue.js,TypeScript.',
            subText:
                'Function: Approve , Expense settlement , Calendar , Attendance ,Profile,etc.',
        },
    ]
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');

.m-k-timeline-title {
    font-family: 'Josefin Sans', sans-serif;
    color: #ffffff;
    font-size: 0.8rem;
    font-weight: 700;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

.m-k-timeline-sub-title {
    font-family: 'Josefin Sans', sans-serif;
    color: #ffffff;
    font-size: 0.8rem;
    font-weight: 700;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-bottom: 8px;
}
</style>>
