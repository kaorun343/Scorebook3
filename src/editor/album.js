import { mapActions, mapGetters } from 'vuex'
import Column from '../grid/column'
import Columns from '../grid/columns'
import Modal from '../components/modal'

export default require('./album.html')({
  name: 'AlbumEditor',
  components: { Column, Columns, Modal },
  computed: mapGetters(['modal']),
  methods: Object.assign({
    submit () {},
    cancel () {
      this.closeModal('album')
    }
  }, mapActions(['closeModal']))
})
