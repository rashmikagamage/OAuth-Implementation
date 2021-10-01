const Axios = require("axios").default;

//function which calls the get repos endpoint
export const createRepos = async (repoName, desc, visibility) => {
  const userName = localStorage.getItem("user_name_git");
  const accessToken = localStorage.getItem("access_token_git");
  Axios({
    method: "POST",
    withCredentials: true,
    url:
      "https://api.github.com/user/" +
      userName +
      "/repos?access_token=" +
      accessToken,
    data: { name: repoName, description: desc, private: visibility },
  });
};

//function to tweet
export const tweet = async (status) => {
  const key = localStorage.getItem("user_key");
  const accessToken = localStorage.getItem("access_token_twitter");
  Axios({
    method: "POST",
    withCredentials: true,
    url:
      "https://api.twitter.com/1.1/statuses/update.json?status=" +
      status,
    params:{
      oauth_consumer_key:key,
      oauth_token:accessToken
    }
  });
};
