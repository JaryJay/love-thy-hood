import axios from "axios";

export default axios.create({
  baseURL: "http://ec2-3-144-185-14.us-east-2.compute.amazonaws.com",
  headers: {
    "Content-type": "application/json",
  },
});
