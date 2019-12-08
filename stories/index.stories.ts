import { storiesOf } from '@storybook/vue'

import MKCard from '../src/components/MKCard.vue'

storiesOf('MKCard', module).add('simple', () => ({
    components: { MKCard },
    template: `<MKCard msg="Welcome to Your Vue.js + TypeScript + Storybook App"/>`,
}))
