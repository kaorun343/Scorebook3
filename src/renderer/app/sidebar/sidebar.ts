import * as Vue from 'vue'
import Component from 'vue-class-component'
import { mapActions, mapGetters } from 'vuex'
import { remote } from 'electron'
const { Menu } = remote
import { Album } from '../vuex/album/state'
import Item from './item'

@Component<Sidebar>({
  computed: mapGetters(['albums']),
  methods: mapActions(['createAlbum', 'editAlbum', 'destroyAlbum']),
  render(h) {
    const albums = this.albums.map((album) => {
      return h(Item, {
        props: { year: album.year, month: album.month } ,
        nativeOn: {
          contextmenu: (e: MouseEvent) => {
            e.stopPropagation()
            this.albumMenu(album)
          }
        }
      })
    })

    return h('aside', { staticClass: 'menu', on: { contextmenu: this.sidebarMenu } }, [
      h('p', { staticClass: 'menu-label' }, 'GENERAL'),
      h('ul', { staticClass: 'menu-list' }, [
        h('a', { attrs: { href: '#' } }, 'お気に入り'),
        h('a', { attrs: { href: '#' } }, '検索')
      ]),
      h('p', { staticClass: 'menu-label' }, 'ALBUMS'),
      h('ul', { staticClass: 'menu-list' }, albums)
    ])
  }
})
export default class Sidebar extends Vue {
  createAlbum: () => void
  editAlbum: (album: Album) => void
  destroyAlbum: (album: Album) => void

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
          this.editAlbum(album)
        }
      },
      {
        label: '削除する',
        click: () => {
          this.destroyAlbum(album)
        }
      }
    ]).popup(remote.getCurrentWindow())
  }
}
