'use strict'

import Column from '../grid/column'
import Columns from '../grid/columns'
import Modal from '../components/modal'

export default require('./song.html')({
  name: 'SongEditor',
  components: { Column, Columns, Modal },
  props: ['show'],
  data() {
    const years = [2016, 2015, 2014, 2013, 2012, 2011, 2010]
    const months = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    return {
      title: 'タイトル',
      albums: years.map(year => ({
        year,
        months: months.map(month => ({
          title: `${year}年${month}月号`,
          value: `${year}${month}`
        }))
      }))
    }
  },
  methods: {
    submit() {
      this.$emit('submit')
    },
    cancel() {
      this.$emit('cancel')
    }
  }
})
