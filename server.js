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
app.get('/app/playRPS', (req, res) => {
    res.status(200).send(playRPS());
});

// rpsls endpoint
app.get('/app/playRPSLS', (req, res) => {
    res.status(200).send(playRPSLS());
});

// play rps endpoint
app.post('/app/playRPS/play', (req, res) => {
    const shot = req.body.shot;
    const result = play(shot);
    res.status(200).send(result);
});

// play rpsls endpoint
app.post('/app/playRPSLS/play', (req, res) => {
    const shot = req.body.shot;
    const result = play(shot);
    res.status(200).send(result);
});

// play rps w params
app.get('/app/playRPS/play/:shot', (req, res) => {
    const shot = req.params.shot;
    const result = play(shot);
    res.status(200).send(result);
});

// play rpsls w params
app.get('/app/playRPSLS/play/:shot', (req, res) => {
    const shot = req.params.shot;
    const result = _play(shot);
    res.status(200).send(result);
});

// default endpoint
app.all('*', (req, res) => {
    res.status(404).send('404 Not Found').end();
});

// listen on given port
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});