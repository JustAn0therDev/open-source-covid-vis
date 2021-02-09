import { useEffect, useState } from 'react'
import { XYPlot, VerticalBarSeries, MarkSeries, XAxis, YAxis, AreaSeries } from 'react-vis'

const height = 600, width = 600, margin = { left: 110 }, metricColors = {
    'recovered': '#009900',
    'deaths': '#990000',
    'confirmed': '#000099'
}

export default function Chart({ propData, metric, chartType }) {
    let [data, setData] = useState([])

    useEffect(() => {
        setData(propData.map(item => {
            const itemToReturn = {}
            itemToReturn.x = item['countryCode']
            itemToReturn.y = item[metric]
            return itemToReturn
        }))
    }, [metric, propData])

    switch (chartType.toLowerCase()) {
        case 'vertical':
            return (
                <XYPlot height={height} width={width} margin={margin}>
                    <XAxis tickTotal={data.length} />
                    <YAxis title={metric} />
                    <VerticalBarSeries data={data} color={metricColors[metric]} />
                </XYPlot>
            )            
        
        case 'area':
            return (
                <XYPlot height={height} width={width} margin={margin}>
                    <XAxis tickTotal={data.length} />
                    <YAxis title={metric} />
                    <AreaSeries data={data} color={metricColors[metric]} />
                </XYPlot>
            )            

        case 'mark':
            return (
                <XYPlot height={height} width={width} margin={margin}>
                    <XAxis tickTotal={data.length} />
                    <YAxis title={metric} />
                    <MarkSeries data={data} color={metricColors[metric]} />
                </XYPlot>
            )
    } 
}
