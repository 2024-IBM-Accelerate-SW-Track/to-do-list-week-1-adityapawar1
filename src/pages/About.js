import React, { Component } from "react";
import profile_picture from "../assets/pfp.png";

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
            <div className="centered">
              <img
                className="profile_image"
                height={42}
                width={42}
                src={profile_picture}
                alt="Profile Pic"
              ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Aditya Pawar</div>
              <div className="brief_description">
                <ul>
                  <li>19 years old</li>
                  <li>EECS student as UC Berkeley</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
