import { mapActions, mapGetters } from 'vuex'
import Column from '../grid/column'
import Columns from '../grid/columns'
import Modal from '../components/modal'

const numbers = ['page', 'electone']

export default require('./song.html')({
  name: 'SongEditor',
  components: { Column, Columns, Modal },
  computed: Object.assign({
    song () {
      return this.songEditor.data
    },
    album () {
      return `${this.song.year}-${this.song.month}`
    }
  }, mapGetters(['songEditor', 'albums'])),
  methods: Object.assign({
    submit () {
      if (this.songEditor.state === 'new') {
        this.createSong()
      } else {
        this.updateSong()
      }
    },
    cancel () {
      this.closeEditor('song')
    },
    change (target, e) {
      const value = e.target.value

      if (target === 'album') {
        const [year, month] = value.split('-').map(str => Number(str))
        this.changeSong({ target: 'year', value: year })
        this.changeSong({ target: 'month', value: month })
      } else if (target === 'piano') {
        this.changeSong({ target, value: value === 'true' })
      } else if (numbers.includes(target)) {
        this.changeSong({ target, value: Number(value) })
      } else {
        this.changeSong({ target, value })
      }
    }
  }, mapActions(['closeEditor', 'changeSong', 'createSong', 'updateSong']))
})
