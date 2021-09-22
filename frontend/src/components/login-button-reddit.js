import React from "react";
import {createButton} from "react-social-login-buttons";
import {createSvgIcon} from "react-social-login-buttons";
import image from "../images/reddit.svg";

const config = {
    text: "Log in with Reddit",
    icon: createSvgIcon(image),
    iconFormat: name => `fa fa-${name}`,
    style: { background: "#ff4500" },
    activeStyle: { background: "#ff4500" }
};

//login button of the reddit
const MyRedditLoginButton = createButton(config);

export default MyRedditLoginButton;
