export default {
  functional: true,
  props: ['title', 'subtitle'],
  render (h, { props }) {
    const { title, subtitle } = props
    return h('div', { staticClass: 'hero is-primary' }, [
      h('div', { staticClass: 'hero-body' }, [
        h('div', { staticClass: 'container is-fluid' }, [
          h('h1', { staticClass: 'title' }, title),
          ...(typeof subtitle === 'string' ? [h('h2', { staticClass: 'subtitle' }, subtitle)] : [])
        ])
      ])
    ])
  }
}
