import React, { Component, PureComponent } from "react";
import img from "../images/linkdelinjob2.png";
import avatar from "../images/my.jpg";
import axios from "axios";
import img1 from "../images/linkdelinjob1.png";
import img2 from "../images/linkdelinjob2.png";
import img3 from "../images/l2.png";

class LinkdinMessaging extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      email: "",
      percentage: 10,
      lastname: "keshana",
      imageurl: "",
      id: "",
      url: "https://www.topjobs.lk/",
      token : "",
      note : "",
      additional :""
    };

    this.handleAdditional = this.handleAdditional.bind(this);
    this.handleNote = this.handleNote.bind(this);
  }
  

  componentDidMount() {
    
    
    const search = window.location.search;
    const params = new URLSearchParams(search);
    var title = params.get("title");
    var email = params.get("email");
    this.setState({
      title: title,
      email: email,
    });
    var token = localStorage.getItem("linkdinAccessToken");
    let currentComponent = this;

    // request to load the profile information
    axios({
      method: "get",
      url: "https://api.linkedin.com/v2/me",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(function (response) {


      // calculate the percenatage of matching of this profile to this vacancies
      // note - linkdin limits about the all info of profile so use only few information to calculate the percentage
      var percentage = 0;
      if (response.data.firstName.preferredLocale.language == "en") {
        percentage += 15;
      }
      if (response.data.industry == "ict") {
        percentage += 10;
      }
      if (response.data.noOfCertifications > 10) {
        percentage += 10;
      }
      if(currentComponent.state.title.includes('Intern')){
        percentage += 10;
      }
      if(currentComponent.state.title.includes('Engineer')){
        percentage += 10;
      }
      if(currentComponent.state.title.includes('React')){
        percentage += 5;
      }
      if (response.data.firstName.preferredLocale.country == "US") {
        percentage += 5;
      }
      
      // set the lastname as response loclaized name
      var lastname = response.data.localizedLastName;

      // when user login with linkedin initially the image url is saved inside localstorage.
      const imageurl = localStorage.getItem("imageurl");

      var id = response.data.id;

     

      currentComponent.setState({
        percentage: percentage,
        lastname: lastname,
        imageurl: imageurl,
        id: id,
        token:token
      });
    });
  }

  // function to share the post
  share(e) {
    e.preventDefault();
    console.log("share post called" + this.state.token);

    //const token = localStorage.getItem("linkdinAccessToken");

    axios({
      method: "post",
      url: "https://api.linkedin.com/v2/ugcPosts",
      headers: {
        Authorization: `Bearer ${this.state.token}`,
        "X-Restli-Protocol-Version": "2.0.0",
        "Content-Type": "application/json",
      },
      data: {
        "author": `urn:li:person:${this.state.id}`,
        "lifecycleState": "PUBLISHED",
        "specificContent": {
            "com.linkedin.ugc.ShareContent": {
                "shareCommentary": {
                    "text": "This is job opporunity for " + this.state.title
                },
                "shareMediaCategory": "ARTICLE",
                "media": [
                    {
                        "status": "READY",
                        "description": {
                            "text": "Job Vacancies for " + this.state.title
                        },
                        "originalUrl": "https://www.topjobs.lk/",
                        "title": {
                            "text": "Job Vacancies for Software Developers"+Math.floor((Math.random() * 10) + 1)
                        }
                    }
                ]
            }
        },
        "visibility": {
            "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"
        }
    }
    }).then(function (response) {
      console.log("share post " + response);
    });


  }

  //send a message to the vacancie owner with access token
  message(e){
    e.preventDefault();

    axios({
      method: 'POST',
      url: 'https://api.linkedin.com/v2/messages',
      headers: {
        Authorization: `Bearer ${this.state.token}`,
        "Content-Type": "application/json",
      },
      data : 
        {
          "recipients": [
            "urn:li:person:123ABC",
          ],
          "subject": "",
          "body": "Hello sir/madam, "+ this.state.note + this.state.additional,
          "messageType": "MEMBER_TO_MEMBER",
      }
      
     })
      .then(function (response) {
      
      })
      .catch(function (error) {
        console.log(error);
        //this.setState({additional: '',note:''});
      });

      this.setState({additional: '',note:''});
  }

  handleAdditional(event) {
    this.setState({additional: event.target.value});
    }

  handleNote(event) {
    this.setState({note: event.target.value});
    }

  render() {
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
              <div className="row">
                <div className="col-6" style={{ textAlign: "left" }}>
                  <img
                    src={img3}
                    style={{
                      width: "40px",
                      marginLeft: "5%",
                      marginTop: "0.8%",
                    }}
                  ></img>
                </div>
                <div className="col-6">
                  <div style={{ marginRight: "4%" }}>
                    <span style={{ color: "#fff" }}>
                      <b> 👋 Hello {this.state.lastname}</b>
                    </span>
                    <img
                      src={this.state.imageurl}
                      alt="Avatar"
                      className="avatar"
                      style={{ marginLeft: "1%" }}
                    ></img>
                  </div>
                </div>
              </div>

              {/* <h4 class="tweetHeader">Hello Keshana!!</h4> */}
            </div>
          </div>
        </div>

        <div
          className="container-lg"
          style={{ marginTop: "3%", marginLeft: "13%" }}
        >
          <div
            className="card"
            style={{
              width: "90%",
              height: "100%",
              boxShadow: "10px 10px 30px #888888",
              // borderRadius: "25px",
            }}
          >
            <div className="">
              <div className="container">
                <div className="row">
                  <div className="col-5" style={{ textAlign: "center" }}>
                    <img src={img} width="85%" />
                    <br />
                    <br />
                    <h5>Presentage of your profile for this job</h5>
                    <div
                      className="progress progress-lg"
                      style={{ height: "40px" }}
                    >
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated "
                        role="progressbar"
                        style={{ width: this.state.percentage+'%' }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {this.state.percentage}%
                      </div>
                    </div>
                    <br></br> <br></br>
                  </div>
                  <div className="col-7" style={{ marginTop: "1%" }}>
                    <h2>{this.state.title}</h2>

                    <p>
                    we are currently seeking a senior mvc .net developer to join our corporate software development teamThe qualified candidate must have working knowledge of software development and software engineering practices in a professional environment.
                    </p>
                    <br></br>
                    <h4>{this.state.email}</h4>
                    <br></br>
                    <form>
                      <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">
                          Note
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          value={this.state.note} 
                          onChange={(e)=>this.handleNote(e)}
                          aria-describedby="emailHelp"
                          style={{ boxShadow: "8px 8px 30px #C9C0BB" }}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          for="exampleInputPassword1"
                          className="form-label"
                        >
                          Additional Information
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputPassword1"
                          value={this.state.additional} 
                          onChange={(e)=>this.handleAdditional(e)}
                          style={{ boxShadow: "8px 8px 30px #C9C0BB" }}
                        />
                      </div>

                      <br></br>

                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ backgroundColor: "#007AB9" }}
                        onClick={(e) => {
                          this.share(e);
                        }}
                      >
                        Share on Wall
                      </button>
                      <br></br>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ backgroundColor: "#007AB9" }}
                        onClick={(e) => {
                          this.message(e);
                        }}
                      >
                        Drop Message
                      </button>
                    </form>
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LinkdinMessaging;
