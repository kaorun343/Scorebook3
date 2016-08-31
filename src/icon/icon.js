'use strict'

export default {
  functional: true,
  props: ['icon'],
  render(h, {props: {icon}}) {
    return h('i', {
      class: ['fa', `fa-${icon}`],
      domProps: {
        'aria-hidden': true
      }
    }, '')
  }
}
