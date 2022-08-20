import React from "react"
import { Country } from "../../models/country.model"
import { useNavigate } from "react-router-dom"

import './CountryCard.scss'

interface Props {
  country: Country
}

function CountryCard({country}: Props) {
  const navigate = useNavigate()
  return (
    <article 
      key={`${country.code}-${country.name}`} 
      className="country-card"
      onClick={()=>navigate(`/country_details/${country.name}/${country.code}`)}
    >
      <h4>Name:</h4>
      {country.name}
      {country.emoji}
      <h5>Capital:</h5>
      {country.capital}
    </article>
  )
}

export default CountryCard