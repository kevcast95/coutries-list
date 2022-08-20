import { gql, useQuery } from '@apollo/client'

export const COUNTRY = gql`
  query singleCountry($code: String){
    country {
      code
      name
      native
      phone
      capital
      currency
      languages
      emoji
      emojiU
      currency
      continent
      states
    }
  }
`

export const Query = useQuery