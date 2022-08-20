import { BaseModel } from "./base.mode"
import { Country } from "./country.model"

export interface State extends BaseModel{
  country: Country
}