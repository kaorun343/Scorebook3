'use strict'
import Icon from '../elements/icon'

export default require('./song.html')({
  name: 'Song',
  props: ['title', 'lead', 'artist', 'year', 'month', 'page', 'piano', 'grade', 'parts'],
  methods: {
    like() {
      console.log('like')
    },
    edit() {
      this.$emit('edit')
    }
  },
  components: { Icon }
})
