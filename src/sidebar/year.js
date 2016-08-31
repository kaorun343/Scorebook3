'use strict'

export default require('./year.html')({
  data() {
    return {
      show: false
    }
  },
  props: ['year', 'months']
})
