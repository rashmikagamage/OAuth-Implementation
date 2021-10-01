
const Axios = require("axios").default;

//method which calls the get repos endpoint
export  const createRepos = async (repoName,desc,visibility) => {
  const userName =  localStorage.getItem("user_name");
  const accessToken =  localStorage.getItem("access_token");
    Axios({
      method: "POST",
      withCredentials: true,
      url: "https://api.github.com/user/"+accessToken+"/repos?access_token="+accessToken,
    });
  };