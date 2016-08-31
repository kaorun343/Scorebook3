'use strict'
import Icon from '../icon/icon'

export default require('./song.html')({
  props: ['title', 'lead', 'artist', 'year', 'month', 'page', 'piano', 'grade', 'parts'],
  methods: {
    like() {
      console.log('like')
    },
    edit() {
      console.log('edit')
    }
  },
  components: { Icon }
})
