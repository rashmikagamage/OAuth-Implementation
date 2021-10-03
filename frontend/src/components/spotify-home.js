import React, { Component, PureComponent } from "react";
import img from "../images/music.png";
import avatar from "../images/girl.png";
import axios from "axios";
import img3 from "../images/spotify.jpg";

class Spotify extends Component {
    constructor(props) {
        super(props);

        this.state = {

            token : "",
            name : "New Playlist 5",
            description : "Description 5"
        };
    }


    componentDidMount() {
        let currentComponent = this;
        axios({
            method: 'get',
            url: 'http://localhost:4000/spotify/gettoken',

        })  .then(function (response) {
           // response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
            console.log(response.data)
            localStorage.setItem("spotifyAccessToken", response.data);

            currentComponent.setState({
                token: response.data
            });
        });
    }

    share(e) {
        e.preventDefault();
        console.log("share post called" + this.state.token);

        var token = 'BQDGvjXyF8pFxsY4vLd4RX1DDB4VuOPG-R79pmvu15xGzU2nW2phznkI5pHw0G7bb-UQN9_p39EmwFDswz4WMS-1GvolnFX79EAPM2dCdr24FLszMo9zhWT-NQ-_CtZsXkPtZ0awgdHURWfU9JYnT1hrxsO1tFcTB0MZz4vadgmYbInf-g';

        axios({
            method: "post",
            url: "https://api.spotify.com/v1/users/p05m444pdwsoyh3sxbfz1bwo8/playlists",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type" : "application/json"
            },
            data: {

                "name": `${this.state.name}`,
                "description" : `${this.state.description}`,
                "public": false
            },
        })
            .then(function (response) {
                //console.log(response.data);
                //save the access token inside browser

            })
    }

    render() {
        return (
            <div>
                <div style={{ backgroundColor: "#000000" }}>
                    <div className="header" style={{ textAlign: "right", margin: "0.065%" }}>
                        <div
                            style={{
                                paddingTop: "0.5%",
                                paddingBottom: "0.5%",
                                paddingRight: "1%",
                            }}>
                            <div className="row">
                                <div className="col-6" style={{ textAlign: "left" }}>
                                    <img
                                        src={img3}
                                        style={{
                                            width: "100px",
                                            marginLeft: "5%",
                                            marginTop: "0.8%",
                                        }}>

                                    </img>
                                </div>
                                <div className="col-6">
                                    <div style={{ marginRight: "4%" }}>
                    <span style={{ color: "#fff" }}>
                      <b> 👋 Hello {this.state.lastname}</b>
                    </span>
                                        <img
                                            src={avatar}
                                            alt="Avatar"
                                            className="avatar"
                                            style={{ marginLeft: "1%" }}
                                        ></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="container-lg"
                    style={{ marginTop: "3%", marginLeft: "13%" }}>
                    <div
                        className="card"
                        style={{
                            width: "90%",
                            height: "100%",
                            boxShadow: "10px 10px 30px #888888",
                        }}>
                        <div className="">
                            <div className="container">
                                <div className="row">
                                    <div className="col-5" style={{ textAlign: "center" }}>
                                        <img src={img} width="85%" />
                                        <br />
                                        <br />
                                        <h5>Create your favourite playlist</h5>
                                        <br></br> <br></br>
                                    </div>
                                    <div className="col-7" style={{ marginTop: "1%" }}>
                                        <h2>Create Playlist</h2>

                                        <p>
                                            Just enter the playlist name you want and add a description to (it must be your own), and click on the create playlist button. It will then allow you to create a playlist!
                                        </p>
                                        <br></br>

                                        <br></br>
                                        <form>
                                            <div className="mb-3">
                                                <label for="exampleInputEmail1" className="form-label">
                                                    Playlist Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="exampleInputEmail1"
                                                    aria-describedby="emailHelp"
                                                    style={{ boxShadow: "8px 8px 30px #C9C0BB" }}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label
                                                    for="exampleInputPassword1"
                                                    className="form-label"
                                                >
                                                    Description
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="exampleInputPassword1"
                                                    style={{ boxShadow: "8px 8px 30px #C9C0BB" }}
                                                />
                                            </div>

                                            <br></br>

                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                                style={{ backgroundColor: "#27b04b" }}
                                                onClick={(e) => {
                                                    this.share(e);
                                                }}
                                            >
                                                Create Playlist
                                            </button>
                                            <br></br>

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



export default Spotify
