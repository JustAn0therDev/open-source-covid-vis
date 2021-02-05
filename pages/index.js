import Head from 'next/head'
import Links from '../src/components/Links/index'
import HomeHeader from '../src/components/HomeHeader/index'
import OpenSourceArticle from '../src/components/OpenSourceArticle'

export default function Home({ fontFamilyUrl }) {
  return (
    <>
    <Head>
      <title>Home</title>
      <link href={fontFamilyUrl} rel="stylesheet"></link>
    </Head>
      <HomeHeader></HomeHeader>
      <OpenSourceArticle></OpenSourceArticle>
      <Links></Links>
    </>
  )
}
