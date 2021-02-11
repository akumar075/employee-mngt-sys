import axios from "axios";

export function getToken(userName) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
  };
  return axios
    .get(`https://localhost:44345/api/login/${userName}`, {
      headers,
    })
    .then((response) => {
      return response.data;
    });
}
