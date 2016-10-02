import { mapActions } from 'vuex'
import Icon from '../bulma/icon'

import { remote } from 'electron'
const { Menu, MenuItem } = remote

export default require('./song.html')({
  components: { Icon },
  name: 'Song',
  props: ['song'],
  methods: Object.assign(mapActions(['editSong']), {
    contextmenu () {
      const menu = new Menu()
      menu.append(new MenuItem({
        label: '編集する',
        click: () => {
          this.editSong(this.song)
        }
      }))
      menu.popup(remote.getCurrentWindow())
    }
  })
})
