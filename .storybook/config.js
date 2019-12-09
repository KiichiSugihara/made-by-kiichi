import { configure, addDecorator } from '@storybook/vue'
import Vue from 'vue'
import Vuetify from 'vuetify'
import vuetifyConfig from '../src/plugins/vuetify.ts'
import 'vuetify/dist/vuetify.css'

Vue.use(Vuetify, {
    iconfont: 'mdi' || 'fa',
})

addDecorator(() => ({
    vuetify: vuetifyConfig,
    template: '<v-app><story/></v-app>',
}))

// automatically import all files ending in *.stories.ts
const req = require.context('../stories', true, /.stories.ts$/)
function loadStories() {
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
