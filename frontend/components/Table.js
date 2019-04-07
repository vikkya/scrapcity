import {distanceInWords} from 'date-fns';
export default function Table({scraps}) {
    return (
       <table>
           <thead>
               <tr>
                   <td>Count</td>
                   <td>Time</td>
               </tr>
           </thead>
           <tbody>
               {scraps.map(scrap => (
                   <tr key={scrap.date}>
                        <td>{scrap.count}</td>
                        <td>- {distanceInWords(new Date(scrap.date), new Date())}</td>
                   </tr>
               ))}
           </tbody>
       </table>
    )
}