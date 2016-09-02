import { mapActions } from 'vuex'
import Icon from '../elements/icon'

import { remote } from 'electron'
const { Menu, MenuItem } = remote

export default require('./song.html')({
  components: { Icon },
  name: 'Song',
  props: ['title', 'lead', 'artist', 'year', 'month', 'page', 'piano', 'grade', 'parts'],
  methods: Object.assign(mapActions(['openModal']), {
    contextmenu () {
      const menu = new Menu()
      menu.append(new MenuItem({
        label: '編集する',
        click: () => {
          this.openModal('song')
        }
      }))
      menu.popup(remote.getCurrentWindow())
    }
  })
})
