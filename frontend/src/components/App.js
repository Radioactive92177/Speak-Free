import React, { Component } from "react";
import axios from "axios";

export class App extends Component {
  state = {
    posts: [],
  };

  loadData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    this.setState({ posts: data });
    console.log(this.state.posts.map((data) => console.log(data.title)));
  };

  componentDidMount() {
    this.loadData();
  }
  render() {
    return (
      <>
        <h1>HHHH</h1>
      </>
    );
  }
}

export default App;
