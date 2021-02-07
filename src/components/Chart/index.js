import { useEffect, useState } from 'react'
import { XYPlot, VerticalBarSeries, MarkSeries, XAxis, YAxis, AreaSeries } from 'react-vis'

const chartColor = '#000099', height = 600, width = 600, margin = { left: 100 }

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
                    <VerticalBarSeries data={data} color={chartColor} />
                </XYPlot>
            )            
        
        case 'area':
            return (
                <XYPlot height={height} width={width} margin={margin}>
                    <XAxis tickTotal={data.length} />
                    <YAxis title={metric} />
                    <AreaSeries data={data} color={chartColor} />
                </XYPlot>
            )            

        case 'mark':
            return (
                <XYPlot height={height} width={width} margin={margin}>
                    <XAxis tickTotal={data.length} />
                    <YAxis title={metric} />
                    <MarkSeries data={data} color={chartColor} />
                </XYPlot>
            )
    } 
}