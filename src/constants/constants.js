module.exports.HTTPS_PROTOCOL = `https://`;
module.exports.OKTA_SSWS_TOKEN = process.env.OKTA_SSWS_TOKEN;
module.exports.OKTA_BASE_URL = `${module.exports.HTTPS_PROTOCOL}${process.env.OKTA_BASE_URL}`;
module.exports.API_VERSION = `api/v1`;
module.exports.GROUP_ID_DEFAULT = `abc124`;

module.exports.OKTA_ACCOUNT_STATUS = {
  ACTIVE: 'ACTIVE',
  PROVISIONED: 'PROVISIONED', // 'Pending user action'
  DEPROVISIONED: 'DEPROVISIONED', // 'Pending user action', 'Deactivated'
  PASSWORD_EXPIRED: 'PASSWORD_EXPIRED'
};
