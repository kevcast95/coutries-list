import React from "react"
import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';

import './Filters.scss'
type Props = {
  continents: string[],
  currencies: string[]
}

function Filters({continents, currencies}: Props) {
  return (
    <div className="filters">
      <div className="filters__selectors">
        <select name="" id="">
          {
            continents?.map((item, idx) => (
              <option key={idx} value={item} >{item}</option>
            ))
          }
        </select>
        
      </div>
      <div className="filters__selectors">
        <DatalistInput
          placeholder="Chocolate"
          label="Select ice cream flavor"
          onSelect={(item) => console.log(item.value)}
          items={currencies.map(currency => ({id:currency, value: currency}))}
        />
      </div>
    </div>
  )
}

export default Filters