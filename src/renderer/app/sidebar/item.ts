import * as Vue from 'vue'
import Component from 'vue-class-component'

@Component<Item>({
  props: ['year', 'month'],
  render(h) {
    return h('li', [
      h('router-link', {
        props: {
          activeClass: 'is-active',
          exact: true,
          to: `/${this.year}/${this.month}`
        }
      }, `${this.year}年${this.month}月号`)
    ])
  }
})
export default class Item extends Vue {
  readonly year: number
  readonly month: number
}
