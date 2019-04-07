import {useEffect, useState} from 'react';
import {ScrapProvider} from './ScrapContext';

//custom hooks
function useScrap(){
    const [scraps, setScraps] = useState({
        twitter: [], instagram: [],
    });
    async function fetchScrap() {
        const res =  await fetch('http://localhost:1234/aggregate');
        const data = await res.json()
        console.log(data);
        setScraps(data)
    }
    useEffect(() => {
        fetchScrap();
    }, [])
    return {scraps, fetchScrap};
}
export default function Page({children}) {
    const hookInfo = useScrap()
    return (
    <ScrapProvider value={hookInfo}>
        <div className="page">{children}</div>
    </ScrapProvider>
    )
}