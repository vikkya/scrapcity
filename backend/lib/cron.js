import cron from 'node-cron';
import {runCron} from './scrapper';

cron.schedule('10 * * * *', () => {
    console.log('Running Con Job');
    runCron();
})