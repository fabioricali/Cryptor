# Cryptorjs 
Simple library for encryption and decryption of string using a key

[![Build Status](https://travis-ci.org/fabioricali/Cryptor.svg?branch=master)](https://travis-ci.org/fabioricali/Cryptor) [![Coverage Status](https://coveralls.io/repos/github/fabioricali/Cryptor/badge.svg)](https://coveralls.io/github/fabioricali/Cryptor)

# Installation

```javascript
npm install cryptorjs --save
```

# Example
### Basic
```javascript
var cryptorjs = require('cryptorjs');

var myCryptor = new cryptorjs('yourSecretKey');

var encoded = myCryptor.encode('myExampleString');
// => '37d8e07a3dddc2971f3e53b1021f51'

var decoded = myCryptor.decode('37d8e07a3dddc2971f3e53b1021f51');
// => 'myExampleString'
```

### With a cipher
For example using "blowfish" cipher
```javascript
var cryptorjs = require('cryptorjs');

var myCryptor = new cryptorjs('yourSecretKey', 'blowfish');

var encoded = myCryptor.encode('myExampleString');
// => 'd21c35352099eac53a129a414530c162'

var decoded = myCryptor.decode('d21c35352099eac53a129a414530c162');
// => 'myExampleString'
```

### Ciphers
You can get the list with a static method
```javascript
var cryptorjs = require('cryptorjs');

cryptorjs.getCiphers();

/*=> [ 'aes-128-cbc',
        'aes-128-cbc-hmac-sha1',
        'aes-128-cbc-hmac-sha256',
        'aes-128-ccm',
        'aes-128-cfb',
        'aes-128-cfb1',
        'aes-128-cfb8',...]
        */
```