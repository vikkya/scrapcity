import express from 'express';
import cors from 'cors';
import {getInstaCount, getTwitterCount} from './lib/scrapper'
import './lib/cron'
import db from './lib/db';

const app = express();
app.use(cors())
app.get('/scrap', async (req, res, next) => {
    const [iCount, tCount] = await Promise.all([getInstaCount(), getTwitterCount()]);
    res.json({iCount, tCount})
});
app.get('/data', async(req, res, next) => {
    const twitter = db.value();
    res.json(twitter)
})
app.listen(1234, () => {console.log('listening on port 1234')})