import React, { useState, useEffect } from "react";
//import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link ,useHistory} from "react-router-dom";
import Card from "./card.js";
import Box from "./box.js";
import avatar from "../images/my.jpg";
//import Layout from '../../components/Layout';
import img1 from "../images/linkdelinjob1.png";
import img2 from "../images/linkdelinjob2.png";
import img3 from "../images/l2.png";
const Axios = require("axios");


function LinkdelinHome(props) {
  const [papers, setPapers] = useState([
    {
      title: "Software Engineer C# - Intern",
      email: "sep@sliit.lk",
      description: 7,
      imageUrl: img1,
      link: "minivan",
      pdfName: "kkwkw",
      certificationKeywords : ['ict','software','intern','react','nodejs'],
      language : 'en',
      country : 'US'
    },
    {
      title: "Software Engineer React - Intern",
      email: "dilan@ml.lk",
      description: 7,
      imageUrl: img2,
      link: "minivan",
      pdfName: "kkwkw",
      certificationKeywords : ['ict','software','intern','net','expressjs'],
      language : 'en',
      country : 'US'
    },
    {
      title: "Job Vacancie 3",
      email: "dasun@abc.uk",
      description: 7,
      imageUrl: img1,
      link: "minivan",
      pdfName: "kkwkw",
      certificationKeywords : ['ict','software','job','react','nodejs'],
      language : 'en',
      country : 'US'
    },
    {
      title: "Job Vacancie 4",
      email: "miyu@sliit.lk",
      description: 7,
      imageUrl: img2,
      link: "minivan",
      pdfName: "kkwkw",
      certificationKeywords : ['ict','software','intern','aws','lambda'],
      language : 'en',
      country : 'US'
    },
  ]);

  const [firstName,setFirstName] = useState(['hasitha']);
  const [lastName,setLastName] = useState([]);
  var [imageUrl,setImageUrl] = useState([avatar]);
  var history = useHistory();

  const getVacancieInfo = (params) => {
    //console.log("papers 10" + params);
   history.push("/linkdin/Messaging"+"?"+"title="+params.title+"&"+"email="+params.email);
  };

  useEffect(() => {
    // after user enter valid credentials,lindin auth server callback to backend.then if it is valid, redirect to this page.
    // access token is sent by the linkdlin to backend and this request to get the access token to the frontend.
    axios({
      method: "get",
      url: "http://localhost:4000/api/gettoken",
    })
      .then(function (response) {
        //console.log(response.data);
        //save the access token inside browser
        localStorage.setItem("linkdinAccessToken", response.data);
      })
      .then(function (response) {
        // request to get profile details
        const token = localStorage.getItem("linkdinAccessToken");
        axios({
          method: "get",
          url: "https://api.linkedin.com/v2/me",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then(function (response) {
          // console.log(response.data);
          setFirstName(response.data.localizedFirstName)
        });
      }).then(function (response) {
        // request to get profile image
        const token = localStorage.getItem("linkdinAccessToken");
        axios({
          method: "get",
          url: "https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,profilePicture(displayImage~:playableStreams))",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then(function (response) {
          // console.log(response.data.profilePicture);

          // console.log(Object.values(response.data.profilePicture ));

          const x = Object.values(response.data.profilePicture );

          imageUrl = x[1].elements[0].identifiers[0].identifier;

          localStorage.setItem("imageurl",imageUrl);

          setImageUrl(imageUrl);
        });
      });

    
  }, []);

  return (
    <div>
      <div style={{ backgroundColor: "#0077b5" }}>
        <div className="header" style={{ textAlign: "right", margin: "0%" }}>
          {/* <div className="headerTitles">
          <span className="headerTitleLg">Job Vacancies</span>
        </div> */}
          <div
            style={{
              paddingTop: "0.5%",
              paddingBottom: "0.5%",
              paddingRight: "1%",
            }}
          >
            <div class="row">
              <div class="col-6" style={{ textAlign: "left" }}>
                <img
                  src={img3}
                  style={{ width: "40px", marginLeft: "5%", marginTop: "0.8%" }}
                ></img>
              </div>
              <div class="col-6">
                <div style={{ marginRight: "4%" }}>
                  <span style={{ color: "#fff" }}>
                    <b> 👋 Hello {firstName}</b>
                  </span>
                  <img
                    src={imageUrl}
                    alt="Avatar"
                    class="avatar"
                    style={{ marginLeft: "1%" }}
                  ></img>
                </div>
              </div>
            </div>

            {/* <h4 class="tweetHeader">Hello Keshana!!</h4> */}
          </div>
        </div>
      </div>

      <br></br>

      <div class="row" style={{ width: "100%", paddingLeft: "2%" }}>
        {papers.map((papers, index) => (
          <div class="col-6">
            <Box
              data={getVacancieInfo}
              className="cardContainer"
              title={papers.title}
              email={papers.email}
              description={papers.description}
              imageUrl={papers.imageUrl}
              index={papers}
            />
            <br></br>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center" }}>Copyright © LinkedIn OAuth 2.0</div>
    </div>
  );
}

export default LinkdelinHome;
