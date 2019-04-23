/**
 * SimpleDateFormat using like java SimpleDateFormat
 * But it is easier to use than SimpleDateFormat
 * @author sewerganger
 * @license MIT
 * {@link https://github.com/sewerganger/simple-date-format}
 */

function isLowerCase(word) {
  return word.charCodeAt(0) > 96 && word.charCodeAt(0) < 133;
}

function isUpperCase(word) {
  return word.charCodeAt(0) > 64 && word.charCodeAt(0) < 91;
}

function handleTimeNum(num) {
  return num < 10 ? '0' + num : num;
}

// 根据大小写 来判断顺序
//XXX/XXX/XXX BB:BB:BB M
function handlePattern(partArray, date, weekdays) {
  var timer = '';
  var a = [
    handleTimeNum(date.getHours()),
    handleTimeNum(date.getUTCMinutes()),
    handleTimeNum(date.getUTCSeconds())
  ];
  var b = [
    date.getUTCFullYear(),
    handleTimeNum(date.getUTCMonth() + 1),
    date.getUTCDate()
  ];

  function innerFunc(ele, index, func, array) {
    if (func(ele.indexOf('~') > -1 ? ele.slice(1) : ele)) {
      var b = '~' === ele.slice(0, 1) ? array.reverse() : array;
      var c = ele.match(/[^~a-zA-Z0-9]/gi) ? ele.match(/[^~a-zA-Z0-9]/gi) : '';

      for (var i = 0; i < c.length + 1; i++) {
        try {
          timer += b[i] + (c[i] ? c[i] : '');
        } catch (err) {
          throw new Error('You should use Separator like (Y/M/D h:m:s)', err);
        }
      }
      timer += ' ';
    }
  }

  partArray.forEach(function(ele, index) {
    innerFunc(ele, index, isLowerCase, a);
    innerFunc(ele, index, isUpperCase, b);
    if (/[^~a-zA-Z0-9]/gi.test(ele[0])) {
      timer += weekdays ? weekdays[ date.getDay() - 1] + ' ' :  date.getDay();
    }
  });
  return timer.trim();
}

// SimplerDateFormat.prototype.parse = function() {};

SimplerDateFormat.prototype.zone = function(zone) {
  var date = new Date();
  var utc = date.getTime() + date.getTimezoneOffset() * 60000;
  return this.format(new Date(utc + 3600000 * zone));
};

SimplerDateFormat.prototype.format = function(date) {
  var splitSpace = this.pattern.trim().split(/\s+/gi);
  return handlePattern(splitSpace, date, this.week);
};

/**
 * @param {String} format  format
 */
function SimplerDateFormat(pattern, week) {
  this.pattern = pattern;
  this.week = week;
}

module.exports = SimplerDateFormat;
