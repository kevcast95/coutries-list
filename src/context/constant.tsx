import { Country } from "../models/country.model"

export const initialCountryState: Country = {
  code: '',
  name: '',
  native: '',
  phone: '',
  continent: {
    countries: [],
    code: '',
    name: '',
  },
  capital: '',
  currency: '',
  languages: [],
  emoji: '',
  emojiU: '',
  states: []
}