'use strict'

export default {
  name: 'Column',
  functional: true,
  render(h, {children}) {
    return h('div', {
      staticClass: 'column'
    }, children)
  }
}
