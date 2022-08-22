import React, { useState } from 'react'
import './App.scss'
import CountryContext from './context/CountryContext';
import { Country } from './models/country.model';
import RoutesList from './RoutesList';

function App() {

  const [allCountries, setAllCountries] = useState<Country[]>([])
  const [clearFilter, setClearFilter] = useState<boolean>(false)

  return (
    <CountryContext.Provider value={{
      allCountries,
      setAllCountries,
      clearFilter,
      setClearFilter,
    }}>
      <div className="App">
        <RoutesList />
      </div>
    </CountryContext.Provider>
    
  );
}

export default App;
