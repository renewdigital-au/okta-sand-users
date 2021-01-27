'use strict';

const axiosInstance = require('./axios-instance/axiosInstance').getAxiosInstance();

const {
  GROUP_ID_DEFAULT,
  OKTA_ACCOUNT_STATUS
} = require('./constants/constants.js');

let errorResponse = {
  statusCode: 500,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Credentials': true
  },
  body: ''
};

let successResponse = {
  statusCode: 200,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Credentials': true
  },
  body: ''
};

const { getAxiosErrorInfo } = require('./utils/axiosUtils');

const idProvider = require('./api/okta/');

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event
      },
      null,
      2
    )
  };
};

module.exports.createUser = async (event) => {
  const { body } = event;
  try {
    const { data } = await idProvider.createUser(body);
    successResponse.body = JSON.stringify({
      message: 'createUser SUCCESS',
      data
    });
    return successResponse;
  } catch (error) {
    console.log('createUser Error: ', error);
    errorResponse.body = JSON.stringify({
      message: `createUser Error: ${getAxiosErrorInfo(error)}`
    });
    return errorResponse;
  }
};

module.exports.activateUser = async (event) => {
  const { body, pathParameters, queryStringParameters } = event;
  const { userId } = pathParameters;
  const { sendEmail } = queryStringParameters;
  try {
    const { data } = await idProvider.activateUser(userId, sendEmail, body);
    successResponse.body = JSON.stringify({
      message: 'activateUser SUCCESS',
      data
    });
    return successResponse;
  } catch (error) {
    console.log('activateUser Error:', error);
    errorResponse.body = JSON.stringify({
      message: `activateUser Error: ${getAxiosErrorInfo(error)}`
    });
    return errorResponse;
  }
};

module.exports.deleteUser = async (event) => {
  const {
    pathParameters: { userId }
  } = event;
  // If user is active, first deactivate before deleting
  let status = null;
  try {
    const { data } = await idProvider.getUser(userId);
    status = data.status;
  } catch (error) {
    console.log('deleteUser/getUser Error:', error);
    errorResponse.body = JSON.stringify({
      message: `deleteUser could not find user Error: ${getAxiosErrorInfo(
        error
      )}`
    });
    return errorResponse;
  }
  if (
    [
      OKTA_ACCOUNT_STATUS.ACTIVE,
      OKTA_ACCOUNT_STATUS.PROVISIONED,
      OKTA_ACCOUNT_STATUS.PASSWORD_EXPIRED
    ].includes(status)
  ) {
    await idProvider.deactivateUser(userId);
  }

  return idProvider
    .deleteUser(userId)
    .then(({ data }) => {
      successResponse.body = JSON.stringify({
        message: 'deleteUser SUCCESS',
        data
      });
      return successResponse;
    })
    .catch((error) => {
      console.log('error:::::: ', error);
      errorResponse.body = JSON.stringify({
        message: `deleteUser Error: ${getAxiosErrorInfo(error)}`
      });
      return errorResponse;
    });
};

module.exports.deActivateUser = async (event) => {
  // de-activate user AKA DEPROVISIONED
  const { pathParameters } = event;
  const { userId } = pathParameters;
  return idProvider
    .deactivateUser(userId)
    .then(({ data }) => {
      console.log('deActivateUser worked');
      successResponse.body = JSON.stringify({
        message: 'deActivateUser SUCCESS',
        data
      });
      return successResponse;
    })
    .catch((error) => {
      console.log('deActivateUser Error: ', error);
      errorResponse.body = JSON.stringify({
        message: `deActivateUser Error: ${error}`
      });
      return errorResponse;
    });
};

module.exports.addUserToGroup = async (event) => {
  const { body, pathParameters } = event;
  const groupId = pathParameters.groupId || GROUP_ID_DEFAULT;
  const userId = pathParameters.userId;

  try {
    const { data } = await idProvider.addUserToGroup(userId, groupId, body);
    console.log('user added to group');
    successResponse.body = JSON.stringify({
      message: 'addUserToGroup SUCCESS',
      data
    });
    return successResponse;
  } catch (error) {
    console.log('addUserToGroup Error: ', error);
    errorResponse.body = JSON.stringify({
      message: `addUserToGroup Error: ${getAxiosErrorInfo(error)}`
    });
    return errorResponse;
  }
};

module.exports.getUser = async (event) => {
  const { pathParameters } = event;
  const { userId } = pathParameters;
  return idProvider
    .getUser(userId)
    .then(({ data }) => {
      successResponse.body = JSON.stringify({
        message: 'getUser SUCCESS',
        data
      });
      return successResponse;
    })
    .catch((error) => {
      console.log('getUser ', error);
      errorResponse.body = JSON.stringify({
        message: `getUser Error: ${getAxiosErrorInfo(error)}`
      });
      return errorResponse;
    });
};

// module.exports.listGroupsByUser = async (event) => {
//   return axiosInstance.get(`/users`);
// };

module.exports.listUsers = async (event) => {
  try {
    const { data } = await idProvider.listUsers();
    successResponse.body = JSON.stringify({
      message: 'listUsers SUCCESS',
      data
    });
    return successResponse;
  } catch (error) {
    console.log('listUsers ', error);
    errorResponse.body = JSON.stringify({
      message: `listUsers Error: ${getAxiosErrorInfo(error)}`
    });
    return errorResponse;
  }
};
