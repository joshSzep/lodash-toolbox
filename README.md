lodash-toolbox
==============

Some general utility 'mixins' created for lodash and bundled as an NPM module.

## Usage ##

Install with `npm install lodash-toolbox`

Usage Example:

```javascript

var _ = require('lodash');
_.mixin(require('lodash-toolbox'));

var dataset = [
    { date: '05-05-2014', clicks: 10 },
    { date: '05-05-2014', clicks: 10 },
    { date: '05-05-2014', clicks: 20 },
    { date: '05-05-2014', clicks: 30 },
    { date: '05-05-2014', clicks: 40 }
];


console.log('(chaining pluck) sum', _(dataset).pluck('clicks').sum().value());
console.log('(chaining pluck) mean', _(dataset).pluck('clicks').mean().value());
console.log('(chaining pluck) median', _(dataset).pluck('clicks').median().value());

console.log('(chaining string iterator) sum', _(dataset).sum('clicks').value());
console.log('(chaining string iterator) mean', _(dataset).mean('clicks').value());
console.log('(chaining string iterator) median', _(dataset).median('clicks').value());

console.log('(chaining function iterator) sum', _(dataset).sum(function (value) {
    return value['clicks'];
}).value());
console.log('(chaining function iterator) mean', _(dataset).mean(function (value) {
    return value['clicks'];
}).value());
console.log('(chaining function iterator) median', _(dataset).median(function (value) {
    return value['clicks'];
}).value());

/** Results:
    (chaining pluck) sum 110
    (chaining pluck) mean 22
    (chaining pluck) median 20
    (chaining string iterator) sum 110
    (chaining string iterator) mean 22
    (chaining string iterator) median 20
    (chaining function iterator) sum 110
    (chaining function iterator) mean 22
    (chaining function iterator) median 20
**/

```

## License ##

    The MIT License (MIT)

    Copyright (c) 2014 Josh Szepietowski

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
