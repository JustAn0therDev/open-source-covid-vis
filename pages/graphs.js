import Head from 'next/head'
import Title from '../src/components/Title/index'

export default function Graphs({ fontFamilyUrl }) {
  return (
    <>
    <Head>
      <title>COVID-19 Data Visualization</title>
      <link href={fontFamilyUrl} rel="stylesheet"></link>
    </Head>
      <Title>
        TODO: DATA VISUALIZATION
      </Title>
    </>
  )
}
