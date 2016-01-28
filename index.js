/**
 * Created by sridharrajs.
 */


'use strict';

let _ = require('lodash');

let wrap = function (callback, attributes) {
    return (err, rawItems) => {
        if (err) {
            return callback(err, null);
        }
        let items = filterByAttributes(rawItems, attributes);
        return callback(null, items);
    };
};

function filterByAttributes(rawItems, attributes) {
    if (!_.isArray(attributes)) {
        // When no filtering attributes are specified return all the items as is
        return rawItems;
    }
    if (_.isEmpty(attributes)) {
        return rawItems;
    }
    let items = _.map(rawItems, (row) => {
        return _.pick(row, attributes);
    });
    return items;
}

module.exports = {
    wrap,
    filterByAttributes
};