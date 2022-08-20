import { gql, useQuery } from '@apollo/client'

export const ALL_COUNTRIES = gql`
  query {
    countries {
      code
      name
      emoji
      emojiU
      currency
      capital
      native
      currency
      continent
    }
  }
`

export const Query = useQuery