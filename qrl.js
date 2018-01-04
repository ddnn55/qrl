#!/usr/bin/env node

const QRCode = require('qrcode');
const argv = require('yargs').argv;
const open = require('open');
const tempfile = require('tempfile');

const path = tempfile('.png');
 
QRCode.toFile(path, argv._[0], function(err, result) {
    open(path);
});
