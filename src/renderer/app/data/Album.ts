const now = new Date()

export default class Album {
  constructor(
    public year: number,
    public month: number,
    public place: Place
  ) {
    this.id = year * 100 + month
  }

  public id: number

  static latest() {
    const latest = new Date()

    return new Album(latest.getFullYear(), latest.getMonth() + 1, Place.MyHome)
  }

  static clone(album: Album) {
    return new Album(album.year, album.month, album.place)
  }
}

export const enum Place {
  MyHome,
  FamilyHome,
  OnLoan
}

export function placeToString(place: Place) {
  switch (place) {
    case Place.MyHome:
      return '自宅'
    case Place.FamilyHome:
      return '実家'
    case Place.OnLoan:
      return '貸出中'
  }
}
