'use strict'

export default {
  functional: true,
  props: ['icon'],
  render (h, { props: { icon }}) {
    return h('i', {
      class: `fa-${icon}`,
      staticClass: 'fa',
      attrs: {
        'aria-hidden': true
      }
    }, '')
  }
}
