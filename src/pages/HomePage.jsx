import { Component } from "react";
import Hero from "../components/Hero";
import Collection from "../components/Collection";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Collection />
      </div>
    );
  }
}
