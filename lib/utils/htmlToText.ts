import sanitizeHtml from 'sanitize-html';

export const htmlToText = (html: string) =>
  sanitizeHtml(html, { allowedTags: [], allowedAttributes: {} });
