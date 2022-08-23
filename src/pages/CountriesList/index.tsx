import React, {  useEffect } from "react" 
import { ALL_COUNTRIES, uQuery } from "../../graphQL/queries"
import CountryCard from "../../componentes/CountryCard";

import { useCountry } from "../../hooks/useCountry";

import './CountriesList.scss'

function CountriesList() {
  
  
  const { allCountries, setAllCountries, clearFilter, setClearFilter } = useCountry()
  const { data, error, loading } = uQuery(ALL_COUNTRIES)

  useEffect(() => {
    if (data && clearFilter) {
      setAllCountries(data.countries)
      setClearFilter(false)
    }
  },[ clearFilter ])

  useEffect(() => {
    if (data && !clearFilter) {
      setAllCountries(data.countries)
    }
  },[data, setAllCountries, clearFilter ])
  
  if (error) return <div>{error.message}</div>
  
  return(
    <section className="countries-list">
      {loading && <h1 className="countries-list__loading">Loading....</h1> }
      {
        allCountries.map((country) => (
         <CountryCard country={country}/>
        ))
      }
    </section>
  )
}

export default CountriesList

