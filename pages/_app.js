import { createGlobalStyle, ThemeProvider } from 'styled-components'
import globalStylesFromJsonFile from '../globalStyles.json'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #222222;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto'
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={globalStylesFromJsonFile.theme}>
      <GlobalStyle misc={globalStylesFromJsonFile.misc} />
        <Component {...pageProps}  fontFamilyUrl={globalStylesFromJsonFile.misc.fontFamilyUrl} />
      </ThemeProvider>
    </>
  )
}
