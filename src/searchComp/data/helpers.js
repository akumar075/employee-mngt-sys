import axios from "axios";

export function getEmpData(searchString) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
  };
  return axios
    .get(`https://localhost:44345/api/employee/${searchString}`, {
      headers,
    })
    .then((response) => {
      return response.data;
    });
}
