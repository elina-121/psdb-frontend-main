import axios from "axios";
import config from "../constant";

const UserAPI = {
  current: async () => {
    // const user: any = window.localStorage.getItem("user");
    // const token = user?.token;
    // try {
    //   const response = await axios.get(`/user`, {
    //     headers: {
    //       Authorization: `Token ${encodeURIComponent(token)}`,
    //     },
    //   });
    //   return response;
    // } catch (error) {
    //   return error.response;
    // }
  },
  login: async (email, password) => {
    // try {
    //   const response = await axios.post(
    //     `${SERVER_BASE_URL}/users/login`,
    //     JSON.stringify({ user: { email, password } }),
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   return response;
    // } catch (error) {
    //   return error.response;
    // }
  },
  register: (firstname, lastname, email, password, confirmPassword) => {
    try {
        return new Promise(function(resolve, reject) {
          axios({
            headers: { 'Content-Type': 'application/json' },
            method: 'post',
            url: `${config.SERVER_URL + config.REGISTER}`,
            data: {
              first_name:firstname,
              last_name:lastname, 
              email:email,
              password:password, 
              password_confirmation:confirmPassword}})
          .then((response) => {
            resolve({
              data : response.data,
              status : 200
            });
          })
          .catch((error) => {
            resolve({
              data : error.response.data,
              status : error.response.status
            });
          });
        });
    } catch (error) {}
  },
  save: async (user) => {
    // try {
    //   const response = await axios.put(
    //     `${SERVER_BASE_URL}/user`,
    //     JSON.stringify({ user }),
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   return response;
    // } catch (error) {
    //   return error.response;
    // }
  },
  follow: async (username) => {
    // const user: any = JSON.parse(window.localStorage.getItem("user"));
    // const token = user?.token;
    // try {
    //   const response = await axios.post(
    //     `${SERVER_BASE_URL}/profiles/${username}/follow`,
    //     {},
    //     {
    //       headers: {
    //         Authorization: `Token ${encodeURIComponent(token)}`,
    //       },
    //     }
    //   );
    //   return response;
    // } catch (error) {
    //   return error.response;
    // }
  },
  unfollow: async (username) => {
    // const user: any = JSON.parse(window.localStorage.getItem("user"));
    // const token = user?.token;
    // try {
    //   const response = await axios.delete(
    //     `${SERVER_BASE_URL}/profiles/${username}/follow`,
    //     {
    //       headers: {
    //         Authorization: `Token ${encodeURIComponent(token)}`,
    //       },
    //     }
    //   );
    //   return response;
    // } catch (error) {
    //   return error.response;
    // }
  }
};

export default UserAPI;
