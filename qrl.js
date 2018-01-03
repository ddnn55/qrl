#!/usr/bin/env node

const QRCode = require('qrcode');
const argv = require('yargs').argv;
var express = require('express')
var app = express()
const getPort = require('get-port');
const open = require('open');
 
getPort().then(port => {

    app.get('/', function (req, res) {
        QRCode.toDataURL(argv._[0])
        .then(url => {
            res.send(`<img src="${url}"/>`);
            setTimeout(function() {
                process.exit(0);
            }, 3000);
        })
        .catch(err => {
            res.status(500);
            res.send('Oops something went wrong.');
            console.error('Oops something went wrong');
            console.error(err);
            process.exit(1);
        })
    });

    app.listen(port, function () {
        open('http://localhost:' + port);
    });
    
});
