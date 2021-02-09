import styled from 'styled-components'
import Head from 'next/head'
import Title from '../src/components/Title/index'
import NewsList from '../src/components/NewsList'
import Navbar from '../src/components/Navbar/index'

const Div = styled.div`
    width: 100vw;
`

export default function News({ fontFamilyUrl }) {
  return (
    <Div>
    <Head>
      <title>COVID-19 NEWS</title>
      <link href={fontFamilyUrl} rel="stylesheet"></link>
      <script type="text/javascript" src="newrelic.js"></script> 
    </Head>
      <Navbar></Navbar>
      <Title>
        READ THE NEWS
      </Title>
      <NewsList>

      </NewsList>
    </Div>
  )
}
