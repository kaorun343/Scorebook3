declare module '*.html' {
  import * as Vue from 'vue'
  var withTemplate: <V extends Vue>(options: Vue.ComponentOptions<V>) => Vue.ComponentOptions<V>

  export = withTemplate
}
