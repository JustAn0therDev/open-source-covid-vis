import Head from 'next/head'
import NewsList from '../src/components/NewsList'
import Title from '../src/components/Title/index'

export default function News({ fontFamilyUrl }) {
  return (
    <>
    <Head>
      <title>COVID-19 NEWS</title>
      <link href={fontFamilyUrl} rel="stylesheet"></link>
    </Head>
      <Title>
        NEWS
      </Title>
      <NewsList>

      </NewsList>
    </>
  )
}
