export var maxPages = 7;
export var paginate = function paginate(_ref) {
  var page = _ref.page,
      total = _ref.total;
  var half = (maxPages - 1) / 2;
  var smallerHalf = Math.floor(half);
  var largerHalf = Math.ceil(half);
  var pageCount = Math.min(maxPages, total);
  var minPage = page - smallerHalf;

  if (page - smallerHalf <= 1) {
    minPage = 1;
  } else if (page + largerHalf >= total) {
    minPage = Math.max(1, total - maxPages + 1);
  }

  return Array.from(Array(pageCount).keys()).map(function (p) {
    return p + minPage;
  });
};