# Cryptor
Encrypt and decrypt string using a key

# Example

```javascript
const cryptor = require('cryptor');

const myCryptor = new cryptor('yourSecretKey')
var secretMessage = myCryptor.encode('myExampleString');
// => '903395757905e0645fdf3e168dc0b7'

var decodedMessage = myCryptor.decode('903395757905e0645fdf3e168dc0b7');
// => 'myExampleString'

```