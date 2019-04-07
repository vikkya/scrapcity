import axios from 'axios';
import cheerio from 'cheerio';
import db from './db';

async function getHTML(url) {
    var {data: html} = await axios.get(url)
    return html;
}

async function getTwitterFollowers(html) {
    var $ = cheerio.load(html)
    var span = $('[data-nav="followers"] .ProfileNav-value')
    return span.data('count')
}

async function getInstaFollowers(html) {
   const $ = cheerio.load(html)
   const dataInString = ($('script[type="application/ld+json"]').html());
   const profileObject = JSON.parse(dataInString)
   return parseInt(profileObject.mainEntityofPage.interactionStatistic.userInteractionCount)
}

async function getInstaCount() {
    const html = await getHTML('https://instagram.com/wesbos');
    const instagramCount = await getInstaFollowers(html);
    return instagramCount;
}

async function getTwitterCount() {
    const html = await getHTML('https://twitter.com/vikkyiam');
    const twitterCount = await getTwitterFollowers(html);
    return twitterCount;
}

async function runCron() {
    const [iCount, tCount] = await Promise.all([getInstaCount(), getTwitterCount()]);
    // console.log({iCount, tCount})
    db.get('twitter').push({
        "date": Date.now(),
        "count": tCount
    }).write();
    db.get('instagram').push({
        "date": Date.now(),
        "count": iCount
    }).write();
    console.log('Done!')
}
export { getHTML, getInstaCount, getTwitterCount, runCron }