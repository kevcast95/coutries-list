import { gql, useLazyQuery, useQuery } from '@apollo/client'

const countryFields = ` {
    code
    name
    emoji
    capital
    currency
  }
`
export const ALL_COUNTRIES = gql`
  query {
    countries: ${countryFields}
  }
`

export const ALL_CONTINENTS = gql`
  query {
    continents {
      name
      code
      countries: ${countryFields}
    }
  }
`

export const FILTER_BY_CONTINENT = gql`
  query getCountriesByContinent($continent: String ) {
    countries(filter: { continent: { eq: $continent } }) {
      name
    }
  }

`


export const COUNTRY = gql`
  query singleCountry($code: ID!){
    country (code: $code){
      code
      name
      phone
      capital
      currency
      languages {
        name
        native
      }
      emoji
      continent {
        name
      }
      states {
        name
      }
    }
  }
`

export const uQuery = useQuery
export const lQuery = useLazyQuery