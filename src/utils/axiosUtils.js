module.exports.getAxiosErrorInfo = (error) => {
  // const {
  //   response: { data }
  // } = error;
  return `${error} - error.response.data: ${JSON.stringify(error)}`;
};
