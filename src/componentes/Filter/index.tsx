import React, { useState, useEffect } from "react"
import { FILTER_BY_CONTINENT, FILTER_BY_CURRENCY, lQuery } from "../../graphQL/queries"

import { useCountry } from "../../hooks/useCountry";
import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';

import './Filters.scss'
import { Continent } from "../../models/continent.model";
type Props = {
  continents: Continent[],
  currencies: string[],
}


function Filters({continents, currencies}: Props) {
  const [queryFilter, setQueryfilter] = useState<string>('')
  const [gettingCountries, { data }] = lQuery(queryFilter === 'continent' ? FILTER_BY_CONTINENT: FILTER_BY_CURRENCY)
  const {setAllCountries, setClearFilter} = useCountry()
  const filterByContinent = (filterBy:string, from: string) => {
    setQueryfilter(from)
    gettingCountries({ variables: { filterBy } })
  }

  useEffect(() => {
    if (data) {
      setAllCountries(data.countries)
    }
  },[data, setAllCountries, ])

  return (
    <div className="filters">
      <button
        type="button"
        className="filters__clear"
        onClick={() => setClearFilter(true)}
      >
        Clear
      </button>
      <div className="filters__selectors">
        {continents && <DatalistInput
          placeholder="Select continent"
          label=""
          onSelect={(item) => filterByContinent(item.id,'continent')}
          items={continents?.map(continent => ({id:continent.code, value: continent.name}))}
        />}
      </div>
      <div className="filters__selectors">
        {currencies && <DatalistInput
          placeholder="Select Currency"
          label=""
          onSelect={(item) => filterByContinent(item.id,'currency')}
          items={currencies?.map(currency => ({id:currency, value: currency}))}
        />}
      </div>
    </div>
  )
}

export default Filters