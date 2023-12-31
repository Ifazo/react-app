import { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <p>Home Page</p>
        <Footer />
      </div>
    );
  }
}
