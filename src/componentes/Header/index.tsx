import React, { useState, useEffect } from "react"
import { ALL_CONTINENTS, SEARCH_COUNTRY, uQuery, lQuery } from "../../graphQL/queries"
import { useCountry } from "../../hooks/useCountry"

import Filters from "../Filter"
import PopUp from "../PopUP"
import { Continent } from "../../models/continent.model"
import { useNavigate, useLocation } from "react-router-dom"

import search from '../../assets/search_white.png'
import menu from '../../assets/menu_white.png'

import './Header.scss'

function Header() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  
  const { data } = uQuery(ALL_CONTINENTS)
  const [searchCountry, result] = lQuery(SEARCH_COUNTRY)


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
  }, [result.data, setAllCountries])
  return (
    <nav className="header">
      {pathname !== '/' &&
        <button
          type="button"
          className="header__home-btn"
          onClick={() => {
            navigate('/');
          }
          }
        >
          Home
        </button>
      }
      {pathname === '/' &&(
        <div>
          <div className="header__search-bar">
            <input
              type="text"
              value={searchInput}
              placeholder="Search a country"
              onChange={({ target }) => handleSearch(target.value)}
            />
            <img src={search} alt="search-icon" />
          </div>
          <div className="header__filertes-section">
            <Filters
              continents={continents}
              currencies={uniqueCurrencies}
            />
          </div>
          <button
            type="button"
            className="header__menu-btn"
            onClick={() => setOpenFilters(!openFilters)}
          >
            <img src={menu} alt="menu-icon" />
          </button>
        </div>
      )}
      {openFilters &&
        <PopUp>
          <Filters
            continents={continents}
            currencies={uniqueCurrencies}
          />
        </PopUp>
      }
    </nav>
  )
}

export default Header