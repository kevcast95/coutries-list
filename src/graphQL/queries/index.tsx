import { gql, useLazyQuery, useQuery } from '@apollo/client'

export const ALL_COUNTRIES = gql`
  query {
    countries {
      code
      name
      emoji
      capital
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