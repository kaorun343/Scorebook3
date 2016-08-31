'use strict'
import Year from './year'

export default require('./sidebar.html')({
  data() {
    const years = [2016, 2015, 2014, 2013, 2012, 2011, 2010]
    const months = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    return {
      general: ['お気に入り', '検索'].map(title => ({title})),
      albums: years.map(year => ({
        year,
        months: months.map(month => ({title: `${year}年${month}月号`}))
      }))
    }
  },
  components: { Year }
})
