import Head from 'next/head'
import { useState } from 'react'
import Title from '../src/components/Title/index'
import Chart from '../src/components/Chart/index'

export default function Graphs({ fontFamilyUrl }) {

  let [chartType, setChartType] = useState('mark')

  return (
    <>
    <Head>
      <title>COVID-19 Data Visualization</title>
      <link href={fontFamilyUrl} rel="stylesheet"></link>
    </Head>
      <Title>
        VISUALIZE COVID-19 DATA
      </Title>
      <Chart chartType={chartType}>

      </Chart>
      <button onClick={() => { setChartType('mark') }} style={{ marginRight: "5px" }}>Set Mark</button>
      <button onClick={() => { setChartType('vertical') }} style={{ marginRight: "5px" }}>Set Vertical</button>
      <button onClick={() => { setChartType('line') }}>Set Line</button>
    </>
  )
}
