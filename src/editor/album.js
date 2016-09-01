'use strict'

import Column from '../grid/column'
import Columns from '../grid/columns'
import Modal from '../components/modal'

export default require('./album.html')({
  name: 'AlbumEditor',
  components: { Column, Columns, Modal },
  props: ['show'],
  methods: {
    submit () {},
    cancel () {
      this.$emit('cancel')
    }
  }
})
