# versionify-assets

[![npm version](http://badge.fury.io/js/versionify-assets.svg)](http://badge.fury.io/js/versionify-assets)
[![Dependency Status](http://david-dm.org/voronianski/versionify-assets.svg)](http://david-dm.org/voronianski/versionify-assets)
[![Download Count](http://img.shields.io/npm/dm/versionify-assets.svg?style=flat)](http://www.npmjs.com/package/versionify-assets)

> Simply add checksum of `.js`/`.css` file to url querystring for cache busting.

## Install

```bash
npm install versionify-assets --save
```

## Usage

```javascript
var versionifyAssets = require('versionify-assets');

// set public folder optionally, defaults to './public'
// will look for fodler starting from project root
versionifyAssets.setFolder('./static');

// returns string with querystring
console.log(versionifyAssets('/app.js'));
// "/app.js?9b8cebc0421241d087f6ab7e815285af803de7e7"
```

---

**MIT Licensed**
