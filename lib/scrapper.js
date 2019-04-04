import axios from 'axios';
import cheerio from 'cheerio';

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
export { getHTML, getTwitterFollowers, getInstaFollowers }