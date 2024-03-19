import React, { Component } from "react";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/users";
export default class RestApp extends Component {
  state = {
    userdata: [],
  };

  componentDidMount() {
    axios
      .get(URL)
      .then((res) => res.data)
      .then((data) => {
        this.setState({ userdata: data });
      });
  }

  render() {
    return <div>
        {this.state.userdata.map((user)=>(
            <div key={user.email}>
                {user.username} -- {user.email}
            </div>
        ))}
    </div>;
  }
}
