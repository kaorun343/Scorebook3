import { FunctionalComponentOptions } from 'vue';

export default {
    name: 'Hero',
    props: ['title', 'subtitle'],
    functional: true,
    render(h, { props: { title, subtitle } }) {
        return h('div', { staticClass: 'hero is-primary' }, [
            h('div', { staticClass: 'hero-body' }, [
                h('div', { staticClass: 'container is-fluid' }, [
                    h('h1', { staticClass: 'title' }, title),
                    ...(typeof subtitle === 'string' ? [h('h2', { staticClass: 'subtitle' }, subtitle)] : [])
                ])
            ])
        ]);
    }
} as FunctionalComponentOptions;
