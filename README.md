# Cryptorjs
Encrypt and decrypt string using a key

# Installation

```javascript
npm install cryptorjs --save
```

# Example

```javascript
var cryptorjs = require('cryptorjs');

var myCryptor = new cryptorjs('yourSecretKey');
var encoded = myCryptor.encode('myExampleString');
// => '37d8e07a3dddc2971f3e53b1021f51'

var decoded = myCryptor.decode('37d8e07a3dddc2971f3e53b1021f51');
// => 'myExampleString'

```