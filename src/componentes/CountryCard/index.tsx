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
      {country.emoji} {country.name}
    </article>
  )
}

export default CountryCard