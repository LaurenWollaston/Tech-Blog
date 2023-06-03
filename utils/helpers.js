const Handlebars = require('handlebars');

module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // Format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  starRating: function (rating) {
    let stars = '';

    // Generate the checked stars
    for (let i = 0; i < rating; i++) {
      stars += '<span class="fa fa-star checked"></span>';
    }

    // Generate the unchecked stars
    for (let i = rating; i < 5; i++) {
      stars += '<span class="fa fa-star"></span>';
    }

    return new Handlebars.SafeString(stars);
  },
  slice: function (array, start, end) {
    return array.slice(start, end);
  },
  gt: function (value1, value2) {
    if (value1 > value2) {
      return (value1);
    }
    return (value2);
  },
  sort: function (array, property, order) {
    var sortedArray = array.slice();
    sortedArray.sort(function(a, b) {
      var valueA = a[property];
      var valueB = b[property];
      if (order === 'desc') {
        return valueB - valueA;
      } else {
        return valueA - valueB;
      }
    });
    return sortedArray;
  }
};
Handlebars.registerHelper('starRating', module.exports.starRating);
Handlebars.registerHelper('slice', module.exports.slice);
Handlebars.registerHelper('gt', module.exports.gt);
Handlebars.registerHelper('sort', module.exports.sort);