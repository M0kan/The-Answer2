
var _ = require('lodash');
var Color = require('color');

var minimums = {
  aa: 4.5,
  aaLarge: 3,
  aaa: 7,
  aaaLarge: 4.5
};

module.exports = function(colors, options) {

  var arr = [];
  var results = [];
  var combinations = [];

  var options = options || {};

  _.defaults(options, {
    threshold: 0,
    compact: false,
    uniq: true
  });


  if (!Array.isArray(colors)) {
    if (typeof colors === 'object') {
      _.forIn(colors, function(val, key) {
        var color = Color(val);
        color.name = key;
        arr.push(color);
      });
      if (options.uniq) {
        arr = _.uniq(arr);
      }
    } else {
      console.error('Must provide an array or object');
      return false;
    }
  } else {
    if (options.uniq) {
      colors = _.uniq(colors);
    }
    colors.forEach(funct