import React from "react";
import {createButton} from "react-social-login-buttons";
import {createSvgIcon} from "react-social-login-buttons";
import image from "../images/spotify.svg";

const config = {
    text: "Log in with Spotify",
    icon: createSvgIcon(image),
    iconFormat: name => `fa fa-${name}`,
    style: { background: "#1DB954" },
    activeStyle: { background: "#1DB954" }
};
/** My Facebook login button. */
const MySpotifyLoginButton = createButton(config);

export default MySpotifyLoginButton;
