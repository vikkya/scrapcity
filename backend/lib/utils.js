// export function uniqueCount(scrap) {
//     return scrap.reduce((acc, scrap) => {
//         if(!acc.find(el => el.count === scrap.count)){
//             return [...acc, scrap]
//         }
//         return acc;
//     }, [])
// }

export function uniqueCount(scraps){
    return scraps.filter((item, i, arr) => {
        if(i===0) return true; //keep it, it's the firt element
        const lastItem = arr[i - 1];
        return !(item.count === lastItem.count)
    });
}