import axios from "axios";

export default axios.create({
  baseURL: "http://nmflightapi.azurewebsites.net",
});
