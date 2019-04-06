import {useEffect, useState} from 'react';
import {ScrapProvider} from './ScrapContext';

//custom hooks
function useScrap(){
    const [scraps, setScraps] = useState({
        twitter: [], instagram: [],
    });
    useEffect(function () {
        (async () => {
        console.log('mounting and updating');
        const res =  await fetch('http://localhost:1234/data');
        const data = await res.json()
        console.log(data);
        setScraps(data)
        })()
    }, [])
    return scraps;
}
export default function Page({children}) {
    const scraps = useScrap()
    return (
    <ScrapProvider value={{
       scraps,
    }}>
        <div className="page">{children}</div>
    </ScrapProvider>
    )
}