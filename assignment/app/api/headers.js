/* eslint no-unneeded-ternary: 0 */
function getHeaders(header, userHeaders) {
  const headers = userHeaders
    ? userHeaders
    : {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
  return header
    ? {
        Authorization: header,
        ...headers,
      }
    : headers;
}

export default getHeaders;
