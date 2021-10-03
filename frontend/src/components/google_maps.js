import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from "axios";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {

  
  static defaultProps = {
    center: {
      lat: 6.9271,
      lng: 79.8612
    },
    zoom: 11,
    token : 'AIzaSyAgphJODUcIjnNv2uEXbCzEB1E32fzQ3ag'
  };

  componentDidMount() {

    let currentComponent = this;

    //get access token from the backend
    axios.get('http://localhost:4000/google/gettoken')
    .then(function (response) {
      // handle success
      console.log(response.data);
      localStorage.setItem("googletoken", response.data);
      localStorage.setItem("freetoken", 'AIzaSyAgphJODUcIjnNv2uEXbCzEB1E32fzQ3ag');

    })
    }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: localStorage.getItem('freetoken') }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          <AnyReactComponent
            lat={6.9271}
            lng={79.8612}
            text="Hospitals"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;