import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { distanceInWords } from 'date-fns';

export default class Example extends PureComponent {
  render() {
    const scrapWithDate = this.props.scraps.map(scrap => ({
        ...scrap,
        date: distanceInWords(new Date(scrap.date), new Date())
    }))
    return (
      <LineChart
        width={800}
        height={300}
        data={scrapWithDate}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis domain={['dataMin', 'dataMax']}/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    );
  }
}
