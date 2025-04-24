const validatePost = (request, response, next) => {
  let { id, name, address, latitude, longitude } = request.body;
  name = name.trim();
  address = address.trim();
  let errorMessage;
  let statusCode;
  if (
    id === undefined ||
    name === undefined ||
    address === undefined ||
    latitude === undefined ||
    longitude === undefined
  ) {
    statusCode = 409;
    errorMessage = "Required parameter field is or are  missing";
  } else if (isNaN(id)) {
    errorMessage = "id is not a numerical value";
    statusCode = 422;
  } else if (isNaN(latitude) || isNaN(longitude)) {
    errorMessage = "latitude or longitude is not a numerical value";
    statusCode = 422;
  } else if (name.length === 0) {
    errorMessage = "name parameter field is empty";
    statusCode = 422;
  } else if (name.length > 50) {
    errorMessage = "the length of the name should be less than 50";
    statusCode = 422;
  } else if (address.length === 0) {
    errorMessage = "address field is empty";
    statusCode = 422;
  } else if (address.length > 100) {
    errorMessage = "the length of the address should be less than 100";
    statusCode = 422;
  } else return next();

  return response.status(statusCode).send(errorMessage);
};

const validateGet = (request, response, next) => {
  let { latitude, longitude } = request.body;
  let errorMessage;
  let statusCode;
  if (latitude === undefined || longitude === undefined) {
    statusCode = 409;
    errorMessage = "Required parameter field is or are  missing";
  } else if (isNaN(latitude) || isNaN(longitude)) {
    errorMessage = "latitude or longitude is not a numerical value";
    statusCode = 422;
  } else return next();

  return response.status(statusCode).send(errorMessage);
};

module.exports = { validatePost, validateGet };
