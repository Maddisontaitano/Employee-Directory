import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=50";


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  employee: function() {
    return axios.get(BASEURL);
  }
};