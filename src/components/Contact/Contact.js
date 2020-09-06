import React from "react";

import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact__form">
      <form noValidate autoComplete="off">
        <div className="inputs__div">
          <TextField
            id="standard-multiline-static"
            label="Contact Us"
            multiline
            rows={5}
            placeholder="Enter Your Query Here"
          />
        </div>
        <div className="inputs__div">
          <Input
            placeholder="Enter your name"
            inputProps={{ "aria-label": "description" }}
          />
        </div>
        <div className="inputs__div">
          <Input
            type="email"
            placeholder="Enter your Email"
            inputProps={{ "aria-label": "description" }}
          />
        </div>
        <Button style={{ width: "190px" }} variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Contact;
