import * as Vue from 'vue'
import Component from 'vue-class-component'
import { mapActions, mapState } from 'vuex'
import AlbumState from '../vuex/album/state'
import SongState, { Song } from '../vuex/song/state'
import Hero from '../../shared/bulma/hero'
// import SongInfo from '../song/song'

@Component<AlbumView>({
  computed: mapState<{ album: AlbumState, song: SongState }>({
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
  readonly songs: Song[]

  showAlbum: () => Promise<void>
}
