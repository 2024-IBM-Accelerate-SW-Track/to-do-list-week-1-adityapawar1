import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
} from "@mui/material";
import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
            <div className="centered"></div>
          </div>
          <div className="split right">
            <div className="centered">
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Avatar
                    className="profile_image"
                    src="../assets/pfp.png"
                    alt="Profile Pic"
                  />
                  Aditya Pawar
                </AccordionSummary>
                <AccordionDetails>
                  19 years old, EECS student at UC Berkeley.
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
