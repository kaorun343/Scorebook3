import { mapActions } from 'vuex'

import { remote } from 'electron'
const { Menu } = remote

export default require('./year.html')({
  data () {
    return {
      show: false
    }
  },
  props: ['year', 'months'],
  methods: Object.assign(mapActions(['newAlbum', 'openModal']), {
    yearMenu () {
      const menu = Menu.buildFromTemplate([
        {
          label: 'アルバムを追加する',
          click: () => {
            this.newAlbum(this.year)
          }
        }
      ])
      menu.popup(remote.getCurrentWindow())
    },
    monthMenu () {
      const menu = Menu.buildFromTemplate([
        {
          label: 'アルバムを編集する',
          click: () => {
            this.openModal('album')
          }
        },
        { type: 'separator' },
        {
          label: '曲を追加する',
          click: () => {
            this.openModal('song')
          }
        }
      ])
      menu.popup(remote.getCurrentWindow())
    }
  })
})
