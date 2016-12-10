import { FunctionalComponentOptions } from 'vue';

export default {
  name: 'Modal',
  functional: true,
  props: ['title'],
  render(h, { props, slots }) {
    const { body, footer } = slots();

    const background = h('div', { staticClass: 'modal-background' });

    const card = h('div', { staticClass: 'modal-card' }, [
      h('header', { staticClass: 'modal-card-head' }, [
        h('p', { staticClass: 'modal-card-title' }, props.title)
      ]),
      h('section', { staticClass: 'modal-card-body' }, body),
      h('footer', { staticClass: 'modal-card-foot' }, footer)
    ])

    return h('div', { staticClass: 'modal', class: { 'is-active': true } }, [background, card]);
  }
} as FunctionalComponentOptions;
