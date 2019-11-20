import React, { Component } from 'react';
import 'antd/dist/antd.css';
import Post from "./components/Post";
import './App.css';
export default class Parent extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
    const body = {
      height: "100vh",
    }
    return (
      <div className="App" style={body} >
        <h1 style={{ letterSpacing: "20px", paddingTop: "1%" }}>Just a Chat</h1>
        <Post />
      </div>
    )
  }
}