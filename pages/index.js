import Head from 'next/head'
import HomeHeader from '../src/components/HomeHeader/index'
import Links from '../src/components/Links/index'

export default function Home({ fontFamilyUrl }) {
  return (
    <>
    <Head>
      <title>Home</title>
      <link href={fontFamilyUrl} rel="stylesheet"></link>
    </Head>
      <HomeHeader></HomeHeader>
      <Links></Links>
    </>
  )
}
