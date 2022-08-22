import React from "react"
import { FILTER_BY_CONTINENT, lQuery } from "../../graphQL/queries"

import { useCountry } from "../../hooks/useCountry";
import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';

import './Filters.scss'
import { Continent } from "../../models/continent.model";
import { log } from "console";
type Props = {
  continents: Continent[],
  currencies: string[]
}

function Filters({continents, currencies}: Props) {
  const [gettingCountries, { data }] = lQuery(FILTER_BY_CONTINENT)
  console.log('continents......', continents, data);
  
  const {setAllCountries} = useCountry()
  const filterByContinent = (continent:string) => {
    console.log(continent);
    gettingCountries({ variables: { continent } })
  }
  return (
    <div className="filters">
      <div className="filters__selectors">
        <DatalistInput
          placeholder=""
          label="Filter by Continent"
          onSelect={(item) => filterByContinent(item.id)}
          items={continents.map(continent => ({id:continent.code, value: continent.name}))}
        />
        
      </div>
      <div className="filters__selectors">
        <DatalistInput
          placeholder="Chocolate"
          label="Filter by currency"
          onSelect={(item) => console.log(item.value)}
          items={currencies.map(currency => ({id:currency, value: currency}))}
        />
      </div>
    </div>
  )
}

export default Filters