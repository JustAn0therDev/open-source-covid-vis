import Head from 'next/head'
import { useState } from 'react'
import styled from 'styled-components'
import Title from '../src/components/Title/index'
import Chart from '../src/components/Chart/index'
import covidDataJson from '../cache/covid_data.json'
import Subtitle from '../src/components/Subtitle/index'

const { covidData } = covidDataJson

const Div = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;

`

const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const CenteredDiv = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & > div > button {
    width: 10vw;
  }
`

const ChartButton = styled.button`
  transition: ease 0.5s;
  background-color: #000000;
  color: #FFFFFF;
  border: 1px solid #444444;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;

  &:hover {
    background-color: #444444;
  }
`

const RecoveredButton = styled.button`
  transition: ease 0.5s;
  background-color: #009900;
  color: #FFFFFF;
  border: 1px solid #009900;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;

  &:hover {
    background-color: #00cc00;
  }
`

const DeathsButton = styled.button`
  transition: ease 0.5s;
  background-color: #990000;
  color: #FFFFFF;
  border: 1px solid #990000;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;

  &:hover {
    background-color: #cc0000;
  }
`

const ConfirmedButton = styled.button`
  transition: ease 0.5s;
  background-color: #000099;
  color: #FFFFFF;
  border: 1px solid #000099;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;

  &:hover {
    background-color: #0000dd;
  }
`

export default function Graphs({ fontFamilyUrl }) {
  let [chartType, setChartType] = useState('vertical')
  let [metric, setMetric] = useState('confirmed')

  return (
    <>
    <Head>
      <title>COVID-19 Data Visualization</title>
      <link href={fontFamilyUrl} rel="stylesheet"></link>
    </Head>
    
      <TitleDiv>
        <Title>
          VISUALIZE COVID-19 DATA
        </Title>
        <Subtitle>
          Click on any of the buttons to see the chart change.
          <br />
          Country codes: 1 - Canada; 2 - USA; 3 - Brazil; 4 - China; 5 - Italy; 6 - United Kingdom

        </Subtitle>
      </TitleDiv>
      <Div>
      <Chart chartType={chartType} propData={covidData ? covidData : []} metric={metric}>

      </Chart>
      <div></div>
      <CenteredDiv>
        <div>
          <ChartButton onClick={() => { setChartType('vertical') }}>Set Vertical Bars</ChartButton>
          <ChartButton onClick={() => { setChartType('mark') }}>Set Marks</ChartButton>
          <ChartButton onClick={() => { setChartType('area') }}>Set Area</ChartButton>
        </div>
        <div>
          <ConfirmedButton onClick={() => { setMetric('confirmed') }}>Confirmed</ConfirmedButton>
          <RecoveredButton onClick={() => { setMetric('recovered') }}>Recovered</RecoveredButton>
          <DeathsButton onClick={() => { setMetric('deaths') }}>Deaths</DeathsButton>
        </div>
      </CenteredDiv>
      </Div>
    </>
  )
}
