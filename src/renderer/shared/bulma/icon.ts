import { FunctionalComponentOptions } from 'vue';

export default {
    name: 'Hero',
    props: ['icon'],
    functional: true,
    render(h, { props: { icon } }) {
        return h('i', {
            class: `fa-${icon}`,
            staticClass: 'fa',
            attrs: { 'aria-hidden': true }
        });
    }
} as FunctionalComponentOptions;
