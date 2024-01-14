import { AreaChart } from 'react-native-svg-charts'

const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

export const AreaChartScreen = () => {
    return <AreaChart style={{ height: 200 }} data={data} svg={{ fill: '#ADD8E6' }} />
}