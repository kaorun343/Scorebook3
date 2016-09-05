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
  methods: Object.assign({}, {
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
    monthMenu (album) {
      const menu = Menu.buildFromTemplate([
        {
          label: '曲を追加する',
          click: () => {
            this.openEditor('song')
          }
        },
        { type: 'separator' },
        {
          label: 'アルバムを編集する',
          click: () => {
            this.editAlbum(album)
          }
        },
        {
          label: 'アルバムを削除する',
          click: () => {
            if (window.confirm(`アルバムを削除しますか？`)) {
              this.destroyAlbum(album)
            }
          }
        }
      ])
      menu.popup(remote.getCurrentWindow())
    },
    to (year, month) {
      return `/${year}/${month}`
    },
    isActive () {
      return this.$route.params.year === this.year
    }
  }, mapActions(['newAlbum', 'editAlbum', 'destroyAlbum', 'openEditor']))
})
