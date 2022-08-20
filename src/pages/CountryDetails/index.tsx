import React from "react" 
import { Country } from "../../models/country.model"
import { COUNTRY, Query } from "../../graphQL/queries"

function CountryDetails() {
  const { data, error, loading } = Query(COUNTRY)
  const currentCountry: Country = data?.country

  return(
    <section>
      <h1>{currentCountry?.name}</h1>
    </section>
  )
}

export default CountryDetails
