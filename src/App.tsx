import React, { useState } from 'react'
import './App.scss'
import CountryContext from './context/CountryContext';
import { Country } from './models/country.model';
import RoutesList from './RoutesList';

function App() {

  const [allCountries, setAllCountries] = useState<Country[]>([])

  return (
    <CountryContext.Provider value={{
      allCountries,
      setAllCountries,
    }}>
      <div className="App">
        <RoutesList />
      </div>
    </CountryContext.Provider>
    
  );
}

export default App;
