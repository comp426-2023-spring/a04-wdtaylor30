#!/usr/bin/env node
// TODO: Almost finished. Read the errors and correct. Keep fighting. AGTG.
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
    res.status(200).send(playRPS());
});

// rpsls endpoint
app.get('/app/rpsls', (req, res) => {
    res.status(200).send(playRPSLS());
});

// play rps endpoint -> URL
app.get('/app/rps/play', (req, res) => {
    res.status(200).send(playRPS(req.query.shot));
});

// play rpsls endpoint -> URL
app.get('/app/rpsls/play', (req, res) => {
    res.status(200).send(playRPSLS(req.query.shot));
});

// play rps -> JSON
app.post('/app/rps/play/', (req, res) => {
    res.status(200).send(playRPS(req.body.shot));
});

// play rpsls -> JSON
app.post('/app/rpsls/play/', (req, res) => {
    res.status(200).send(playRPSLS(req.body.shot));
});

// play rps -> parameter
app.get('/app/rps/play/:shot', (req, res) => {
    res.status(200).send(playRPS(req.params.shot));
});

// play rpsls -> parameter
app.get('/app/rpsls/play/:shot', (req, res) => {
    res.status(200).send(playRPSLS(req.params.shot));
});

// default endpoint
app.all('*', (req, res) => {
    res.status(404).send('404 NOT FOUND').end();
});

// listen on given port
app.listen(port);