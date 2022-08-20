import { BaseModel } from "./base.mode"

export interface Language extends BaseModel {
  native: string
  rtl: boolean
}