function isInLastSixHour(timestamp){
    const sixHoursAgo = 1000 * 60 * 60 * 6;
    return Date.now() - timestamp < sixHoursAgo;
}
export default function aggregate(scraps) {
    const aggregateScrap = [...scraps].reverse().map(scrap => {
        const date = new Date(scrap.date)
        const optionalHour = isInLastSixHour(scrap.date) ? `-${date.getHours()}`: ``
        const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}${optionalHour}` 
        return{
            key,
            ...scrap
        }}).reduce((acc, currentScrap) => {
            if(!acc.find(scrap => scrap.key === currentScrap.key)){
                return [...acc, currentScrap]
            }
            return acc;
        }, []).reverse();
    return aggregateScrap;
}