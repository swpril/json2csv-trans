"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.json2Csv = void 0;
function json2Csv(jsonArray) {
    if (!jsonArray || (jsonArray && jsonArray.length === 0)) {
        return;
    }
    var data = __spreadArray([], jsonArray, true);
    var replacer = function (key, value) { return (value !== null ? value : ''); };
    var entityKeys = data && Object.keys(data[0]);
    var headers = entityKeys.map(function (key) { return key[0].toUpperCase() + key.slice(1); });
    var csv = data.map(function (row) {
        var updatedRow = entityKeys.map(function (key) { return row[key]; });
        return updatedRow.map(function (value) { return JSON.stringify(value, replacer); }).join();
    });
    csv.unshift(headers.join());
    return csv.join('\r\n');
}
exports.json2Csv = json2Csv;
