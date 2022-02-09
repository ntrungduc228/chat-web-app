const DEFAULT_ERROR_MESSAGE = "Something went wrong!";

// export const selectErrorMessage = (error) => {
//   if (error.response && error.response.data && error.response.data.errors) {
//     let errorMsg = "";

//     error.response.data.errors.forEach((item) => {
//       errorMsg += item.messages[0] + "\n";
//     });
//     return errorMsg;
//   }
//   if (error.response) {
//     // The request was made and the server responded with a status code
//     // that falls out of the range of 2xx
//     return error.response.data.message;
//     // console.log(error.response.status);
//   }
//   if (!error.success) {
//     return error.message;
//   }
//   // Something happened in setting up the request that triggered an Error
//   return error.message || DEFAULT_ERROR_MESSAGE;
// };

export const selectErrorMessage = (error) => {
  if (error && error.data && error.data.message) {
    return error.data.message;
  }
  return error || DEFAULT_ERROR_MESSAGE;
};
