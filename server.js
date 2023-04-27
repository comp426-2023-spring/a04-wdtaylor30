#!/usr/bin/env node
import express from 'express';
import minimist from 'minimist';

import { playRPS, playRPSLS } from './lib/rpsls.js';

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// set port to 5000 by default or port given by user
var argv = minimist(process.argv.slice(2));
const port = argv.port|| 5000;

// check endpoints
app.get('/app', (req, res) => {
    res.status(200).send('200 OK');
});

// rps endpoint
app.get('/app/rps', (req, res) => {
    res.status(200).send({"player":"(rock|paper|scissors)"});
});

// rpsls endpoint
app.get('/app/rpsls', (req, res) => {
    res.status(200).send({"player":"(rock|paper|scissors|lizard|spock)"});
});

// play rps endpoint
app.post('/app/rps/play', (req, res) => {
    const shot = req.body.shot;
    const result = playRPS(shot);
    res.status(200).send(result);
});

// play rpsls endpoint
app.post('/app/rpsls/play', (req, res) => {
    const shot = req.body.shot;
    const result = playRPSLS(shot);
    res.status(200).send(result);
});

// play rps w params
app.get('/app/rps/play/:shot', (req, res) => {
    const shot = req.params.shot;
    const result = playRPS(shot);
    res.status(200).send(result);
});

// play rpsls w params
app.get('/app/rpsls/play/:shot', (req, res) => {
    const shot = req.params.shot;
    const result = playRPSLS(shot);
    res.status(200).send(result);
});

// default endpoint
app.all('*', (req, res) => {
    res.status(404).send('404 Not Found').end();
});

// listen on given port
app.listen(port);