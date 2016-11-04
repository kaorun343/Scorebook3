import Editor from '../editor'
import { Bool } from '../bool'

export class Album {
    constructor(
        public year = new Date().getFullYear(),
        public month = 12,
        public onLoan = Bool.FALSE
    ) { }

    get title() {
        return `${this.year}年${this.month}月号`
    }
}

export default class State {
    public editor = new Editor(new Album(), 'アルバム')
    public hero = {
      title: '',
      subtitle: ''
    }

    constructor(
        public albums: { [key: string]: Album } = {}
    ) { }
}
