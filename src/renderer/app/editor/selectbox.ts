import * as Vue from 'vue'
import Component from 'vue-class-component'
import { prop } from 'vue-property-decorator'
import Column from '../../shared/bulma/column'

export class Option {
  constructor(public text: string, public value: any) { }
}

@Component<Selectbox>({
  render(h) {
    const id = `${this.prefix}-${this.name}`

    const select = h('select', {
      attrs: { name: id, id, disabled: this.disabled },
      domProps: {
        value: `${this.value}`
      },
      on: {
        change: (e: any) => {
          this.$emit('input', e.target.value)
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
export default class Selectbox extends Vue {
  @prop({ type: null })
  readonly prefix: string

  @prop({ type: null })
  readonly name: string

  @prop({ type: null })
  readonly title: string

  @prop({ type: null })
  readonly disabled: boolean

  @prop({ type: null })
  readonly value: any
}
