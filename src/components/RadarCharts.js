import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend } from 'recharts';
import { prepareData } from './chart-utils';

const RadarCharts = ({ data }) => {
    // Prepare the data
    let transformedData = prepareData(data);

    return (                  
    <RadarChart outerRadius={90} width={730} height={250} data={transformedData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="key" />   
        <PolarRadiusAxis angle={30} domain={[0, 10]} />
        <Radar  dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Radar  dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} /> 
    </RadarChart>)};

export default RadarCharts;
