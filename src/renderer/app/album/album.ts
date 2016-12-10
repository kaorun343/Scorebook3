import * as Vue from 'vue'
import Component from 'vue-class-component'
import { mapActions, mapState } from 'vuex'
import Hero from '../../shared/bulma/hero'

@Component<AlbumView>({
  computed: mapState<{ album: any, song: any }>({
    hero: (state) => state.album.hero,
    songs: (state) => state.song.songs
  }),
  methods: mapActions(['showAlbum']),
  watch: {
    '$route': 'showAlbum'
  },
  render(h) {
    const { title, subtitle} = this.hero
    return h('div', { staticClass: 'songs-container' }, [
      h('div', { staticClass: 'songs-hero' }, [
        h(Hero, { props: { title, subtitle } })
      ]),
      h('div', { staticClass: 'songs' },
        this.songs.map(song => h('div', song.title))
      )
    ])
  },
  created() {
    this.showAlbum()
  }
})
export default class AlbumView extends Vue {
  readonly hero: { title: string, subtitle: string }
  readonly songs: any[]

  showAlbum: () => Promise<void>
}
