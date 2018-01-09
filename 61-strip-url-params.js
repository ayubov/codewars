// Complete the method so that it does the following:

// Removes any duplicate query string parameters from the url
// Removes any query string parameters specified within the 2nd argument (optional array)
// Examples:

// stripUrlParams('www.codewars.com?a=1&b=2&a=2') // returns 'www.codewars.com?a=1&b=2'
// stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) // returns 'www.codewars.com?a=1'
// stripUrlParams('www.codewars.com', ['b']) // returns 'www.codewars.com'


export default (url, paramsToStrip = []) => {
  if (!url.includes('?')) return url;
  const q = url.indexOf('?');
  return `${url.slice(0, q)}?${url.slice(q + 1).split('&')
    .reduce((acc, e) => (acc.some(el => el[0] === e[0]) || paramsToStrip.includes(e[0]) ? acc : [...acc, e]), []).join('&')}`;
};
