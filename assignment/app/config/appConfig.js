import Environments from './environments.json';

const defaultEnvironment = 'development';

export const getBaseUrl = function getBaseUrl() {
  switch (defaultEnvironment) {
    case 'development':
      return Environments.development.BASE_URL;
    default:
      break;
  }
  return Environments.production.BASE_URL;
};
