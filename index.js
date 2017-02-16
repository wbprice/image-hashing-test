'use strict';

const crypto = require('crypto');
const fs = require('fs');
const assert = require('assert');

function md5String(str) {
    return crypto.createHash('md5').update(str, 'utf8').digest('hex'); 
}

function md5(buf) {
    return crypto.createHash('md5').update(buf).digest('hex'); 
}

fs.readFile('car.jpg', function(err, payload) {
    assert.ok(!err);
    assert.ok(payload);
    
    const hash1 = md5String(String(payload));
    const hash2 = md5(payload);
    assert.equal(hash1, hash2);
});
