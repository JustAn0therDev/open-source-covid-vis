import globalStylesFromJsonFile from '../globalStyles.json'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-animation: fadein 0.5s;
    -moz-animation: fadein 0.5s; 
    -ms-animation: fadein 0.5s;
    -o-animation: fadein 0.5s;
    animation: fadein 0.5s;
  }

  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  @-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  @-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  @-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  @-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #FFFFFF;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto';
    overflow-x: hidden;
  }

  body section {
    width: 100vw;
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
