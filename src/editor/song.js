import { mapActions, mapGetters } from 'vuex'
import Column from '../grid/column'
import Columns from '../grid/columns'
import Modal from '../components/modal'

export default require('./song.html')({
  name: 'SongEditor',
  components: { Column, Columns, Modal },
  computed: Object.assign({}, {
    song () {
      return this.songEditor.data
    }
  }, mapGetters(['songEditor', 'albums'])),
  data () {
    return {
      title: 'タイトル'
    }
  },
  methods: Object.assign({
    submit () {
      this.$emit('submit')
    },
    cancel () {
      this.closeEditor('song')
    }
  }, mapActions(['closeEditor']))
})
