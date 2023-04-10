const express = require('express');

// use body parser to parse
const bodyParser = require('body-parser');

// load a03 packages
const rps = require('./lib/rps-cli');
const rpsls = require('./lib/rpsls-cli');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// set port to 5000 by default or port given by user
const port = process.argv.slice(2)[0] || 5000;

// default endpoint
app.use((req, res) => {
    res.status(404).send({error: 'Endpoint not found'});
});

// check endpoints
app.get('/app', (req, res) => {
    res.status(200).send({message: 'Endpoint /app/ is working'});
});

// rps endpoint
app.get('/app/rps', (req, res) => {
    res.status(200).send({player: '(rock|paper|scissors'});
});

// rpsls endpoint
app.get('/app/rpsls', (req, res) => {
    res.status(200).send({player: '(rock|paper|scisors|lizard|spock)'});
});

// play rps endpoint
app.post('/app/rps/play', (req, res) => {
    const shot = req.body.shot;
    const result = rps.play(shot);
    res.status(200).send(result);
});

// play rpsls endpoint
app.post('/app/rps/play', (req, res) => {
    const shot = req.body.shot;
    const result = rps.play(shot);
    res.status(200).send(result);
});

// play rps w params
app.get('/app/rps/play/:shot', (req, res) => {
    const shot = req.params.shot;
    const result = rps.play(shot);
    res.status(200).send(result);
});

// play rpsls w params
app.get('/app/rpsls/play/:shot', (req, res) => {
    const shot = req.params.shot;
    const result = rpsls.play(shot);
    res.status(200).send(result);
});

// listen on given port
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});