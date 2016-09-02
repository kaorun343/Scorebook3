import { mapGetters, mapActions } from 'vuex'
import Year from './year'

import { remote } from 'electron'
const { Menu } = remote

export default require('./sidebar.html')({
  components: { Year },
  computed: mapGetters({
    albums: 'albums'
  }),
  data () {
    return {
      general: ['お気に入り', '検索'].map(title => ({ title }))
    }
  },
  methods: Object.assign(mapActions(['openModal']), {
    contextmenu () {
      const menu = Menu.buildFromTemplate([
        {
          label: 'アルバムを追加する',
          click: () => {
            this.openModal('album')
          }
        }
      ])
      menu.popup(remote.getCurrentWindow())
    }
  })
})
