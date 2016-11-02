import * as Vue from 'vue'
import Component from 'vue-class-component'
import { mapActions, mapGetters } from 'vuex'
import { remote } from 'electron'
const { Menu } = remote
import { Album } from '../vuex/modules/album/state'

@Component<Sidebar>({
  computed: mapGetters(['albums']),
  methods: mapActions(['createAlbum', 'editAlbum', 'destroyAlbum']),
  render(h) {
    const albums = this.albums.map((album) => {
      return h('li',
        {
          on: {
            contextmenu: (e: PointerEvent) => {
              e.stopPropagation()
              this.albumMenu(album)
            }
          }
        },
        [
          h('router-link', {
            props: {
              activeClass: 'is-active',
              exact: true,
              to: `/${album.year}/${album.month}`
            }
          }, album.title)
        ]
      )
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
      {
        label: '曲を追加する'
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
          this.destroyAlbum(album)
        }
      }
    ]).popup(remote.getCurrentWindow())
  }
}
