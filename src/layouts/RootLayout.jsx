import { Component } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class RootLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  }
}
