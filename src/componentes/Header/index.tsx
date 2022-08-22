import React, { useState, useEffect } from "react"
import { ALL_CONTINENTS, SEARCH_COUNTRY, uQuery, lQuery } from "../../graphQL/queries"
import { useCountry } from "../../hooks/useCountry"

import Filters from "../Filter"

import search from '../../assets/search.png'
import filter from '../../assets/filter.png'

import './Header.scss'
import { Continent } from "../../models/continent.model"

function Header() {
  const { data } = uQuery(ALL_CONTINENTS)
  const [searchCountry,result] = lQuery(SEARCH_COUNTRY)
  console.log('result:', result);
  
  const { allCountries, setAllCountries, setClearFilter } = useCountry()
  const continents: Continent[] = data?.continents
  const currencies: string[] = allCountries?.map(country => country.currency)
  const [openFilters, setOpenFilters] = useState<Boolean>(false)
  const [searchInput, setSearchInput] = useState<string>('')
  
  var uniqueCurrencies = currencies?.filter((v, i, a) => a.indexOf(v) === i);

  const handleSearch = (value: string) => {
    setSearchInput(value)
    if (value.length <= 0) setClearFilter(true);
    const searchResult = allCountries.filter(country => 
      country.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())).map(item => (
        item.code
      ))
      
    searchCountry({ variables: { searchResult } })
  }
  useEffect(() => {
    if (result.data) {
      setAllCountries(result.data.countries)
    }
  },[result.data, setAllCountries])
  return (
    <nav className="header">
      <div className="header__search-bar">
        <input 
          type="text" 
          value={searchInput}
          placeholder="Search a country"
          onChange={({target})=> handleSearch(target.value)}
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
      <button 
        type="button" 
        className="header__filter-btn"
        onClick={() => {
            setClearFilter(true);
            setSearchInput('')
          }
        }
      >
        <p>Clear</p>
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