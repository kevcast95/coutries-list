import { createContext } from 'react'
import { Country } from '../models/country.model'
import { initialCountryState } from './constant'

type Context = {
  allCountries: Country[],
  setAllCountries:(country: Country[]) => void,
  clearFilter: boolean
  setClearFilter: (state: boolean) => void,
}

const CountryContext = createContext<Context>({
  allCountries: [initialCountryState],
  setAllCountries: () => {},
  clearFilter: false,
  setClearFilter: () => {},
})

export default CountryContext