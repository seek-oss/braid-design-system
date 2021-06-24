import sanitizeHtml from 'sanitize-html';
export var htmlToText = function htmlToText(html) {
  return sanitizeHtml(html, {
    allowedTags: [],
    allowedAttributes: {}
  });
};