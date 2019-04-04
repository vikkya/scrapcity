import {getHTML, getTwitterFollowers, getInstaFollowers} from './lib/scrapper'

async function go() {
    const tPromise = getHTML('https://twitter.com/vikkyiam');
    const iPromise = getHTML('https://instagram.com/wesbos');

    const [twitterHTML, instaHTML] = await Promise.all([tPromise, iPromise])

    const twCount = await getTwitterFollowers(twitterHTML)
    const instagramCount = await getInstaFollowers(instaHTML)

    console.log(`you have ${twCount} followers and ${instagramCount} followers`)
    // console.log(html)
}
go()