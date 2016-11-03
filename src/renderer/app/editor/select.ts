import * as Vue from 'vue'
import Component from 'vue-class-component'
import Column from '../../shared/bulma/column'

export class Option {
  constructor(public text: string, public value: any) { }
}

@Component<Select>({
  props: ['value', 'prefix', 'name', 'title', 'disabled'],
  render(h) {
    const id = `${this.prefix}-${this.name}`

    const select = h('select', {
      attrs: { name: id, id, disabled: this.disabled },
      domProps: {
        value: `${this.value}`
      },
      on: {
        change: (e: any) => {
          this.$emit('change', e.target.value)
        }
      }
    }, this.$slots['default'])

    return h(Column, [
      h('label', { staticClass: 'label', attrs: { for: id } }, this.title),
      h('p', { staticClass: 'control' }, [
        h('span', { staticClass: 'select is-fullwidth' }, [
          select
        ])
      ])
    ])
  }
})
export default class Select extends Vue {
  readonly prefix: string
  readonly name: string
  readonly title: string
  readonly disabled: boolean
  readonly value: any
}
