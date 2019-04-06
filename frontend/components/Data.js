import {useContext} from 'react';
import {distanceInWords} from 'date-fns';
import {ScrapContext} from './ScrapContext';
export default function Data () {
    const {scraps} = useContext(ScrapContext);
    return <div>
        <h2>Your Data: </h2>
        <ul>
            {scraps.twitter.map(scrap => (
                <li key={scrap.Date}>{scrap.count} - {distanceInWords(new Date(scrap.Date), new Date())}</li>
            ))}
        </ul>
    </div>
}