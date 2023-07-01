import { extendTheme } from '@chakra-ui/react'

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
}

const theme = extendTheme(
  {
    fonts: {
      heading: `'freshwost', sans-serif`,
      body: `'freshwost', sans-serif`,
    },
    styles: {
      global: (props) => ({
        'html, body': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },
      }),
    },
  },
  { breakpoints }
)

export default theme
