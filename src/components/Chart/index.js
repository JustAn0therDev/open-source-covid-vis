import { XYPlot, VerticalBarSeries, MarkSeries, XAxis, YAxis, LineSeries } from 'react-vis'


const data = [
    {x: 1, y: 5},
    {x: 2, y: 4},
    {x: 3, y: 3},
    {x: 4, y: 1},
    {x: 5, y: 2},
]

export default function Chart({ chartType }) {
    switch (chartType.toLowerCase()) {
        case 'vertical':
            return (
                <XYPlot height={600} width={600} >
                    <XAxis />
                    <YAxis />
                    <VerticalBarSeries data={data} />
                </XYPlot>
            )            
    
        case 'mark':
            return (
                <XYPlot height={600} width={600}>
                    <XAxis />
                    <YAxis />
                    <MarkSeries data={data} />
                </XYPlot>
            )
        default:
            return (
                <XYPlot height={600} width={600}>
                    <XAxis />
                    <YAxis />
                    <LineSeries data={data} />
                </XYPlot>
            )
            break;
    }
}