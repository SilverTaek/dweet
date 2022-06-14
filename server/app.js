import express from 'express';
import tweetRouter from './router/tweets.js';

const app = express();

app.use(express.json());

app.use('/tweets', tweetRouter);

app.use((req, res, next) => {
    res.sendStatus(404);
});

app.use((error, res, req, next) => {
    console.error(error);
    res.sendStatus(500);
});

app.listen(8888);