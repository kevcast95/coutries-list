import React, {  useEffect } from "react" 
import { ALL_COUNTRIES, uQuery } from "../../graphQL/queries"
import CountryCard from "../../componentes/CountryCard";

import { useCountry } from "../../hooks/useCountry";

import './CountriesList.scss'

function CountriesList() {
  
  const { data, error, loading } = uQuery(ALL_COUNTRIES)
  const { allCountries, setAllCountries } = useCountry()

  useEffect(() => {
    if (data) {
      //const subArray = data.countries.slice(0,20)
      setAllCountries(data.countries)
    }
  },[data, setAllCountries])
  
  if (loading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>
  
  return(
    <section className="countries-list">
      {
        allCountries.map((country) => (
         <CountryCard country={country}/>
        ))
      }
    </section>
  )
}

export default CountriesList

