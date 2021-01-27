const axiosInstance = require('../../../axios-instance/axiosInstance').getAxiosInstance();

module.exports.activateUser = (userId, sendEmail, body) => {
  return axiosInstance.post(
    `/users/${userId}/lifecycle/activate?sendEmail=${sendEmail}`,
    body
  );
};
