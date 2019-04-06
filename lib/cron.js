import cron from 'node-cron';
import {runCron} from './scrapper';

cron.schedule('* * * * *', () => {
    console.log('Running Con Job');
    runCron();
})