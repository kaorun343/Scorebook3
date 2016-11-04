import { Bool } from '../bool'

const date = new Date()

export class Song {

  constructor(
    public year = date.getFullYear(),
    public month = date.getMonth() + 1
  ) { }

  public page = 1
  public title = ''
  public description = ''
  public artist = ''
  public arranger = ''
  public grade = ''
  public electone = 1
  public piano = Bool.FALSE
}

export default class State {
  constructor(
    public songs: Song[] = []
  ) { }
}

