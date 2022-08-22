import { gql, useLazyQuery, useQuery } from '@apollo/client'

export const ALL_COUNTRIES = gql`
  query {
   countries {
    code
    name
    emoji
    capital
    currency
   }
  }
`

export const ALL_CONTINENTS = gql`
  query {
    continents {
      name 
      code
    }
  }
`

export const FILTER_BY_CONTINENT = gql`
  query getCountriesByContinent($filterBy: String ) {
    countries(filter: { continent: { eq: $filterBy } }) {
      code
      name
      emoji
      capital
      currency
    }
  }
`

export const FILTER_BY_CURRENCY = gql`
  query getCountriesByContinent($filterBy: String ) {
    countries(filter: { currency: { eq: $filterBy } }) {
      code
      name
      emoji
      capital
      currency
    }
  }
`

export const SEARCH_COUNTRY = gql`
  query searchCountry($searchResult: [String] ) {
    countries(filter: { code: { in: $searchResult } }) {
      code
      name
      emoji
      capital
      currency
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