# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [3.0.0] - 2018-09-03
- Changed cipher method from `createCipher` to `createCipheriv` for node deprecation
- **Breaking changes** now support only this ciphers:
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

## [2.1.0] - 2017-12-03
- Added static method `hasHash`
- Minor fix

## [2.0.2] - 2017-08-25
- Added static method `hash`
- Deprecated static methods `MD5` and `SHA1` 

## [1.2.0] - 2017-06-10
### Added
- Static methods `MD5` and `SHA1` 

## [1.1.0] - 2017-06-07
### Added
- CHANGELOG.md
- Support to encrypt object

### Fixed
- Some bug

