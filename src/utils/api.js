import Apidata from "../api.json";

export const fetchData = (errorHandler) => {
  try {
    return Apidata;
  } catch (err) {
    errorHandler(err);
  }
};
