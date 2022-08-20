import React, { useState, useEffect } from "react" 
import { ALL_COUNTRIES, Query } from "../../graphQL/queries/getCountries"
import { Country } from "../../models/country.model";
import CountryCard from "../../componentes/CountryCard";

import './CountriesList.scss'

function CountriesList() {
  const { data, error, loading } = Query(ALL_COUNTRIES)
  const [allCountries, setAllCountries] = useState<Country[]>([])
  console.log(data, error, loading);

  useEffect(() => {
    if (data) {
      const subArray = data.countries.slice(0,20)
      setAllCountries(subArray)
    }
  },[data])
  
  
  return(
    <section className="countries-list">
      {
        allCountries.map((country: Country) => (
         <CountryCard country={country}/>
        ))
      }
    </section>
  )
}

export default CountriesList

