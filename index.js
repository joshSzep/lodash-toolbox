/**
 * Lodash Toolbox:
 * Copyright (c) 2014 Josh Szepietowski
 * Locensed under the MIT License (MIT).
 */

"use strict";

var _ = require('lodash');

// Export mixins
var mixins = module.exports = {};

/**
 * Return the sum of the elements. If there is no iterator provided and obj isEmpty a sum of 0 is returned.
 * @param obj - REQUIRED the collection of elements to sum
 * @param iterator - OPTIONAL string 'key' to sum within objects, or function iterator to return value to sum
 * @param context - OPTIONAL 'this' context to run the iterator function in
 * @returns {*}
 */
mixins.sum = function (obj, iterator, context) {
        if (!iterator && _.isEmpty(obj)) {
            return 0;
        }
        var result = undefined;
        _.forEach(obj, function (value, index, list) {
            var v = _.isFunction(iterator) ?
                iterator.call(context, value, index, list) :
                _.isString(iterator) ?
                    value[iterator] :
                    value;
            result = (_.isUndefined(result)) ? v : result + v;
        });
        return result;
    };

/**
 * Return arithmetic mean average of the elements.
 * @param obj - REQUIRED the collection of elements to mean average
 * @param iterator - OPTIONAL string 'key' to get values, or function iterator to return values
 * @param context - OPTIONAL, 'this' context to run the iterator function in
 * @returns {*}
 */
mixins.mean = function (obj, iterator, context) {
        var objIsEmpty = _.isEmpty(obj);
        var objIsArray = _.isArray(obj);
        if (!iterator && objIsEmpty) {
            return Infinity;
        }
        if (!iterator && objIsArray) {
            return _.sum(obj) / obj.length;
        }
        if (!objIsEmpty && objIsArray) {
            return _.sum(obj, iterator, context) / obj.length;
        }
    };

/**
 * Return median of the elements.
 * If the object element number is odd, the object in the "middle" of the sorted array is returned.
 * If the object element number is even, the arithmetic mean of the two elements in the middle is returned.
 * @param obj
 * @param iterator
 * @param context
 * @returns {*}
 */
mixins.median = function (obj, iterator, context) {
        if (_.isEmpty(obj)) return Infinity;
        var tmpObj = [];
        if (!iterator && _.isArray(obj)) {
            tmpObj = _.clone(obj);
            tmpObj.sort(function (f, s) {
                return f - s;
            });
        } else {
            _.isArray(obj) && _.forEach(obj, function (value, index, list) {
                var tmpVal = _.isFunction(iterator) ?
                    iterator.call(context, value, index, list) :
                    _.isString(iterator) ?
                        value[iterator] :
                        value
                tmpObj.push(tmpVal);
                tmpObj.sort();
            });
        }
        return tmpObj.length % 2 ?
            tmpObj[Math.floor(tmpObj.length / 2)] :
            (_.isNumber(tmpObj[tmpObj.length / 2 - 1]) && _.isNumber(tmpObj[tmpObj.length / 2])) ?
                (tmpObj[tmpObj.length / 2 - 1] + tmpObj[tmpObj.length / 2]) / 2 :
                tmpObj[tmpObj.length / 2 - 1];
    };
