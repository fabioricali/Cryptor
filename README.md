<div align="center">
<h1>Cryptorjs</h1>
Simple library for encryption and decryption of string, number and object using a key
<br/><br/>
<a href="https://travis-ci.org/fabioricali/Cryptor" target="_blank"><img src="https://travis-ci.org/fabioricali/Cryptor.svg?branch=master" title="Build Status"/></a>
<a href="https://coveralls.io/github/fabioricali/Cryptor?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/fabioricali/Cryptor/badge.svg?branch=master" title="Coverage Status"/></a>
<a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" title="License: MIT"/></a>
<img src="https://img.shields.io/badge/team-terrons-orange.svg" title="Team Terrons"/>
</div>

## Installation

```javascript
npm install cryptorjs --save
```

## Example
### Basic
```javascript
var cryptorjs = require('cryptorjs');

var myCryptor = new cryptorjs('yourSecretKey');

var encoded = myCryptor.encode('myExampleString');
// => '37d8e07a3dddc2971f3e53b1021f51'

var decoded = myCryptor.decode('37d8e07a3dddc2971f3e53b1021f51');
// => 'myExampleString'
```
### Object encryption
```javascript
var cryptorjs = require('cryptorjs');

var myCryptor = new cryptorjs('yourSecretKey');

var encoded = myCryptor.encode({ a: 1, b: 2 });
// => '2183c42066819ed9184f1df116'

var decoded = myCryptor.decode('2183c42066819ed9184f1df116');
// => { a: 1, b: 2 }
```

### With a cipher
For example using "camellia-256-cfb1" cipher
```javascript
var cryptorjs = require('cryptorjs');

var myCryptor = new cryptorjs('yourSecretKey', 'camellia-256-cfb1');

var encoded = myCryptor.encode('myExampleString');
// => 'ac3277ba5c3f433d6b7ea70979fe55'

var decoded = myCryptor.decode('ac3277ba5c3f433d6b7ea70979fe55');
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

### Hash helpers
Create an hash using available hashes in your platform
```javascript
var cryptorjs = require('cryptorjs');

// Check if exists MD5 hash
console.log(cryptorjs.hasHash('md5')); //=> true

cryptorjs.hash('ciao', 'md5');

/*=> '6e6bc4e49dd477ebc98ef4046c067b5f'*/

cryptorjs.hash('ciao', 'sha1');

/*=> '1e4e888ac66f8dd41e00c5a7ac36a32a9950d271'*/
```

### Supported ciphers (since 3.0.0)
- aes-256-cbc
- aes-256-cbc-hmac-sha1
- aes-256-cbc-hmac-sha256
- aes-256-cfb
- aes-256-cfb1
- aes-256-cfb8
- aes-256-ctr
- aes-256-ofb
- aes256
- camellia-256-cbc
- camellia-256-cfb
- camellia-256-cfb1
- camellia-256-cfb8
- camellia-256-ofb
- camellia256

## License
Cryptorjs is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)

## Author
[Fabio Ricali](http://rica.li)