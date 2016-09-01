'use strict'

export default {
  name: 'Modal',
  functional: true,
  props: ['show', 'title'],
  render(h, {props, slots}) {
    const {body, footer} = slots()

    const backbround = h('div', { staticClass: 'modal-background' }, '')

    const title = h('p', { staticClass: 'modal-card-title' }, props.title)
    const card = h('div', {staticClass: 'modal-card'}, [
      h('header', { staticClass: 'modal-card-head' }, [title]),
      h('section', {staticClass: 'modal-card-body'}, body),
      h('footer', {staticClass: 'modal-card-foot'}, footer)
    ])

    return h('div', { staticClass: 'modal', class: { 'is-active': props.show } }, [ backbround, card ])
  }
}
