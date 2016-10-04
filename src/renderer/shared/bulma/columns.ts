import { FunctionalComponentOptions } from 'vue';

export default {
    name: 'Columns',
    functional: true,
    render(h, { children }) {
        return h('div', { staticClass: 'columns' }, children);
    }
} as FunctionalComponentOptions;
