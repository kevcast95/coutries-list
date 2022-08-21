import { useContext } from 'react'
import CountryContext from '../context/CountryContext'

export const useCountry =  () => useContext(CountryContext) 