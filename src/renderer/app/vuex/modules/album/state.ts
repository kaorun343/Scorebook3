import Editor from '../editor'

export const enum AlbumState {
  FALSE, TRUE
}

export class Album {
    constructor(
        public year = new Date().getFullYear(),
        public month = 12,
        public onLoan = AlbumState.FALSE
    ) { }

    get title() {
        return `${this.year}年${this.month}月号`
    }
}

export default class State {
    public editor = new Editor(new Album(), 'アルバム')

    constructor(
        public albums: { [key: string]: Album } = {}
    ) { }
}
