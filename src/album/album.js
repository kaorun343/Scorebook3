import { mapActions, mapGetters } from 'vuex'
import Hero from '../bulma/hero'
import Song from '../song/song'

export default require('./album.html')({
  components: { Hero, Song },
  computed: mapGetters(['album', 'songs']),
  watch: {
    '$route': 'showAlbum'
  },
  created () {
    this.showAlbum()
  },
  methods: mapActions(['showAlbum'])
})
