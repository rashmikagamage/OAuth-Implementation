
const Axios = require("axios").default;

//method which calls the get repos endpoint
export  const createRepos = async () => {
    Axios({
      method: "POST",
      withCredentials: true,
      url: "http://localhost:4000/git/createrepos",
    }).then((res) => console.log(res));
  };