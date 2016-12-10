import * as Vue from 'vue'
import Component from 'vue-class-component'
import { mapActions, mapGetters } from 'vuex'
import * as _ from 'lodash'
import { remote } from 'electron'
const { Menu } = remote
import Album from '../data/Album'
import Item from './item'

@Component<Sidebar>({
  computed: mapGetters(['albums']),
  // methods: mapActions(['createAlbum', 'editAlbum', 'destroyAlbum']),
  methods: mapActions(['createAlbum']),
  render(h) {
    const albums = _.map(this.albums, (album) => {
      return h(Item, {
        props: { year: album.year, month: album.month },
        nativeOn: {
          contextmenu: (e: MouseEvent) => {
            e.stopPropagation()
            this.albumMenu(album)
          }
        }
      })
    })

    return h('aside', { staticClass: 'menu', on: { contextmenu: this.sidebarMenu } }, [
      h('p', { staticClass: 'menu-label' }, 'ALBUMS'),
      h('ul', { staticClass: 'menu-list' }, albums)
    ])
  }
})
export default class Sidebar extends Vue {
  createAlbum: () => Promise<void>
  editAlbum: (album: Album) => Promise<void>
  destroyAlbum: (album: Album) => Promise<void>

  albums: Album[]

  sidebarMenu() {
    Menu.buildFromTemplate([
      {
        label: 'アルバムを追加する',
        click: () => {
          this.createAlbum()
        }
      }
    ]).popup(remote.getCurrentWindow())
  }

  albumMenu(album: Album) {
    Menu.buildFromTemplate([
      { label: '曲を追加する' },
      { type: 'separator' },
      {
        label: '編集する',
        click: () => {
          // this.editAlbum(album)
        }
      },
      {
        label: '削除する',
        click: () => {
          // this.destroyAlbum(album)

        }
      }
    ]).popup(remote.getCurrentWindow())
  }
}
