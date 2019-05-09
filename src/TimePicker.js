import React, { Component } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import AccessTime from "@material-ui/icons/AccessTime";
import "./App.css";

const getTimes = (placeholder, min, max) => {
  const items = [];
  items.push(
    <MenuItem key={`${placeholder}`} value="">
      {placeholder}
    </MenuItem>
  );
  for (let i = min; i <= max; i++) {
    if (i < 10)
      items.push(
        <MenuItem key={`${placeholder}-${i}`} value={i}>{`0${i}`}</MenuItem>
      );
    else if (i < max)
      items.push(
        <MenuItem key={`${placeholder}-${i}`} value={i}>
          {i}
        </MenuItem>
      );
    else
      items.push(
        <MenuItem key={`${placeholder}-${i}`} value={i}>
          00
        </MenuItem>
      );
  }
  return items;
};

const TimePicker = ({ hour, minute, handleChange }) => (
  <form className="time-picker-form" autoComplete="off">
    <FormControl>
      <InputLabel
        style={{ padding: "0px 0px 2px 0px", margin: "5px 0px 0px 0px" }}
        htmlFor="hour"
      >
        Hour
      </InputLabel>
      <Select
        style={{
          fontSize: "2rem",
          padding: "0px 0px 5px 0px",
          width: "70px"
        }}
        value={hour}
        className="time-picker-select"
        onChange={handleChange}
        inputProps={{
          name: "hour",
          id: "hour"
        }}
      >
        {getTimes("Hour", 1, 24)}
      </Select>
    </FormControl>
    <h1 style={{ margin: "0px 10px 0px 10px" }}>:</h1>
    <FormControl>
      <InputLabel
        style={{ padding: "0px 0px 2px 0px", margin: "5px 0px 0px 0px" }}
        htmlFor="minute"
      >
        Minutes
      </InputLabel>
      <Select
        style={{
          fontSize: "2rem",
          padding: "0px 0px 5px 0px",
          width: "70px"
        }}
        value={minute}
        className="time-picker-select"
        onChange={handleChange}
        inputProps={{
          name: "minute",
          id: "minute"
        }}
      >
        {getTimes("Minutes", 1, 60)}
      </Select>
    </FormControl>
    <AccessTime fontSize="large" />
  </form>
);
export default TimePicker;
