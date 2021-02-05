import {api} from './api';
import getHeaders from './headers';

const apiCall = (url, method, body, headers) =>
  api(
    url,
    method,
    {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body,
  );

export {apiCall};
