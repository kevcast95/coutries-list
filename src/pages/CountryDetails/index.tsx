import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Country } from "../../models/country.model"
import { COUNTRY, lQuery } from "../../graphQL/queries"
import currency from "../../assets/currency.png"
import location from "../../assets/location.png"
import language from "../../assets/language.png"
import globe from "../../assets/globe.png"

import './CountryDetails.scss'

function CountryDetails() {
  const { code } = useParams()
  const [getCountryDetail, { data, error, loading }] = lQuery(COUNTRY)

  const currentCountry: Country = data?.country

  useEffect(() => {
    getCountryDetail({ variables: { code } })
  }, [])

  return (
    <section className="country-details">
      <h1>{currentCountry?.emoji} {currentCountry?.name} ({currentCountry?.code}) </h1>
      <div className="country-details_main">
        <span>
          <img src={location} alt="" />
          <h4>Capital:</h4>
          <p>{currentCountry?.capital}</p>
          
        </span>
        <span>
          <img src={globe} alt="" />
          <h4>Continent:</h4>
          <p>{currentCountry?.continent.name}</p>
        </span>
        <span>
          <img src={language} alt="" />
          <h4>Language:</h4>
          {
            currentCountry?.languages.map(lang => (
              <p>{lang.name}</p>
            ))
          }
          
        </span>
        <span>
          <img src={currency} alt="" />
          <h4>Currency:</h4>
          <p>{currentCountry?.currency}</p>
        </span>
      </div>
    </section>
  )
}

export default CountryDetails
