export function albumEditor (state) {
  return state.editors.album
}

export function songEditor (state) {
  return state.editors.song
}

export function albums ({ albums }) {
  return Object.keys(albums).map(year => {
    const months = albums[year].months
    return {
      year,
      months: Object.keys(months).map(month => months[month]).reverse()
    }
  }).reverse()
}
