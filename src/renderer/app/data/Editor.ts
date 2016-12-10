export default class Editor {
  public state = EditorState.WAITING
  public show = false
  public title = ''
}

export const enum EditorState {
  CREATING, EDITING, WAITING
}

export function stateToString(state: EditorState) {
  switch (state) {
    case EditorState.CREATING:
      return '新規作成'
    case EditorState.EDITING:
      return '編集'
    case EditorState.WAITING:
      return ''
  }
}
