import { mapActions, mapGetters } from 'vuex'
import Column from '../grid/column'
import Columns from '../grid/columns'
import Modal from '../components/modal'

export default require('./song.html')({
  name: 'SongEditor',
  components: { Column, Columns, Modal },
  computed: mapGetters(['modal', 'albums']),
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
      this.closeModal('song')
    }
  }, mapActions(['closeModal']))
})
