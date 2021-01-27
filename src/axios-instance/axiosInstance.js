const axios = require('axios');

const {
  OKTA_BASE_URL,
  API_VERSION,
  OKTA_SSWS_TOKEN
} = require('../constants/constants.js');

function getAxiosInstance() {
  return axios.create({
    baseURL: `${OKTA_BASE_URL}/${API_VERSION}`,
    timeout: 3000,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `SSWS ${OKTA_SSWS_TOKEN}`
    }
  });
}

module.exports = { getAxiosInstance };
