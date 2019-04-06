import express from 'express';
import {getInstaCount, getTwitterCount} from './lib/scrapper'
import './lib/cron'
const app = express();

app.get('/scrap', async (req, res, next) => {
    const [iCount, tCount] = await Promise.all([getInstaCount(), getTwitterCount()]);
    res.json({iCount, tCount})
});

app.listen(1234, () => {console.log('listening on port 1234')})