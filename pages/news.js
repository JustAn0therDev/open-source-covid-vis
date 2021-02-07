import Head from 'next/head'
import Title from '../src/components/Title/index'
import NewsList from '../src/components/NewsList'

export default function News({ fontFamilyUrl }) {
  return (
    <>
    <Head>
      <title>COVID-19 NEWS</title>
      <link href={fontFamilyUrl} rel="stylesheet"></link>
    </Head>
      <Title>
        READ THE NEWS
      </Title>
      <NewsList>

      </NewsList>
    </>
  )
}
