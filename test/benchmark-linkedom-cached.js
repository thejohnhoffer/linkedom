const benchmark = require('./benchmark.js');
const {DOMParser} = require('../cjs/cached.js');
const dp = new DOMParser;

benchmark('linkedom', html => dp.parseFromString(html, 'text/html'));