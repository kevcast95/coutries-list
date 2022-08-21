import React, { useState, useEffect } from "react"
import { ALL_CONTINENTS, uQuery } from "../../graphQL/queries"
import { useCountry } from "../../hooks/useCountry"

import Filters from "../Filter"

import search from '../../assets/search.png'
import filter from '../../assets/filter.png'

import './Header.scss'

function Header() {
  const { data } = uQuery(ALL_CONTINENTS)
  const { allCountries, setAllCountries } = useCountry()
  const continents: string[] = data?.continents.map((continent: { name: string }) => continent.name)
  const currencies: string[] = allCountries?.map(country => country.currency)
  const [openFilters, setOpenFilters] = useState<Boolean>(false);
  
  var uniqueCurrencies = currencies?.filter((v, i, a) => a.indexOf(v) === i);
  console.log(data?.continents);

  const searchCountry = (value: string) => {
    console.log(value);
    const searchResult = allCountries.filter(country => 
      country.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
    setAllCountries(searchResult)
  }
  
  useEffect(()=> {
  },[])
  return (
    <nav className="header">
      <div className="header__search-bar">
        <input 
          type="text" 
          placeholder="Search a country"
          onChange={({target})=> searchCountry(target.value)}
        />
        <img src={search} alt="search-icon" />
      </div>
      <button 
        type="button" 
        className="header__filter-btn"
        onClick={() => setOpenFilters(!openFilters)}
      >
        <p>Filter</p>
        <img src={filter} alt="filter-icon" />
      </button>
      {openFilters &&
        <Filters 
          continents={continents}
          currencies={uniqueCurrencies}
        />
      }
    </nav>
  )
}

export default Header