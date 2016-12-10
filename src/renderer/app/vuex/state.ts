import Album from '../data/Album'
import Editor from '../data/Editor'

export default class State {
  constructor(
    public albums: Album[] = [],
    public editors = {
      album: new Editor
    }
  ) {}
}
