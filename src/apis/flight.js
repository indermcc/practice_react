import axios from "axios"; // import axios module

export default axios.create({
  baseURL: "http://nmflightapi.azurewebsites.net", // defining api url
});
