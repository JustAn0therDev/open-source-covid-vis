import Head from 'next/head'
import Title from '../src/components/Title/index'
import Subtitle from '../src/components/Subtitle/index'

export default function Home({ fontFamilyUrl }) {
  return (
    <>
    <Head>
      <title>Home</title>
      <link href={fontFamilyUrl} rel="stylesheet"></link>
    </Head>
      <Title>
        OSCV
      </Title>
      <Subtitle>
        An open-source website for COVID-19 data visualization
      </Subtitle>
    </>
  )
}
