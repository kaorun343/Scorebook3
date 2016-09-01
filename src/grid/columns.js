'use strict'

export default {
  name: 'Columns',
  functional: true,
  render (h, { children }) {
    return h('div', {
      staticClass: 'columns'
    }, children)
  }
}
