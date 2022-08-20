import { BaseModel } from "./base.mode"

import { Country } from "./country.model"

export interface Continent  extends BaseModel{
  countries: Country[]
}