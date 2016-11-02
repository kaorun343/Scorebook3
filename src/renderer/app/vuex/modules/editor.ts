export default class Editor<T> {
    state = EditorState.WAITING
    valid = true

    constructor(public data: T, public name: string) { }

    get title() {
        if (this.state === EditorState.CREATING) {
            return `新規${this.name}作成`
        } else {
            return `${this.name}を編集`
        }
    }

    get show() {
        return this.state !== EditorState.WAITING
    }
}

export const enum EditorState {
    CREATING, EDITING, WAITING
}
