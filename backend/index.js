import express from 'express';
import cors from 'cors';
import {uniqueCount} from './lib/utils';
import {getInstaCount, getTwitterCount} from './lib/scrapper'
import './lib/cron';
import aggregate from './lib/aggregate';
import db from './lib/db';

const app = express();
app.use(cors())
app.get('/scrap', async (req, res, next) => {
    const [iCount, tCount] = await Promise.all([getInstaCount(), getTwitterCount()]);
    res.json({iCount, tCount})
});
app.get('/aggregate', async(req, res, next) => {
    const {twitter, instagram} = db.value();
    //filter the unique data
    const uniqueTwitter = uniqueCount(twitter);
    const uniqueInstagram = uniqueCount(instagram);

    const aggTwitter = aggregate(twitter);
    const aggInstagram = aggregate(instagram)
    res.json({twitter: aggTwitter, instagram: aggInstagram})
})
app.listen(1234, () => {console.log('listening on port 1234')})