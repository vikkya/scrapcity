import {useContext} from 'react';
import Table from './Table';
import Chart from './Chart';
import {ScrapContext} from './ScrapContext';
export default function Data () {
    const {scraps, fetchScrap} = useContext(ScrapContext);
    return <div>
        <button type="button" onClick={fetchScrap}>Refresh Data</button>
        <h2>Twitter: </h2>
        <Table scraps={scraps.twitter}/>
        <Chart scraps={scraps.twitter}/>
        <h2>Instagram: </h2>
        <Table scraps={scraps.instagram}/>
        <Chart scraps={scraps.instagram}/>
    </div>
}