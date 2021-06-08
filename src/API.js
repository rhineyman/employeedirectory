import axios from "axios";

const BASEURL = "https://randomuser.me/api/?&results=20&nat=us";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  getEmployee: function () {
      return axios.get(URL);
  }
};