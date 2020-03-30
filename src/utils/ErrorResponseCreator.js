const RequestErrors = {
  pointReqError: () =>
    makeErrorOBJ("The point in params is not in correct forma.t", 400),
  polygonReqError: () =>
    makeErrorOBJ("The polygon in body is not in correct format.", 400)
};

const makeErrorOBJ = (message, code) => ({
  message,
  code
});

module.exports = RequestErrors;
