import { createContext } from 'react'
import { Country } from '../models/country.model'
import { initialCountryState } from './constant'

type Context = {
  allCountries: Country[],
  setAllCountries:(country: Country[]) => void,
}

const CountryContext = createContext<Context>({
  allCountries: [initialCountryState],
  setAllCountries: () => {},
})

export default CountryContext