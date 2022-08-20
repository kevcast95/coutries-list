import { BaseModel } from "./base.mode"
import { Continent } from "./continent.model"
import { Language } from "./language.model"
import { State } from "./state.model"

export interface Country extends BaseModel{
  native: string
  phone: string
  continent: Continent
  capital: string
  currency: string
  languages: Language[]
  emoji: string
  emojiU: string
  states: State[]
}