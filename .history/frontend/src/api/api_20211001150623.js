
const Axios = require("axios").default;

//method which calls the get repos endpoint
export  const createRepos = async (repoName,desc,visibility) => {
  const userName =  localStorage.getItem("user_name_git");
  const accessToken =  localStorage.getItem("access_token_git");
    Axios({
      method: "POST",
      withCredentials: true,
      url: "https://api.github.com/user/"+userName+"/repos?access_token="+accessToken,
      data: {"name": repoName,
      "description": desc,
      "private": visibility}
    });
};

export  const tweet = async (repoName,desc,visibility) => {
  const userName =  localStorage.getItem("user_name_twitter");
  const accessToken =  localStorage.getItem("access_token_twitter");
    Axios({
      method: "POST",
      withCredentials: true,
      url: "https://api.github.com/user/"+userName+"/repos?access_token="+accessToken,
    });
};