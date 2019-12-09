import { storiesOf } from '@storybook/vue'

import MKCard from '../src/components/MKCard.vue'

storiesOf('MKCard', module).add('MKCard', () => ({
    components: { MKCard },
    template: `<MKCard/>`,
}))
