/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Slide from "../components/Slide";
import Product from "../components/Product";
class Home extends Component {
  render() {
    return (
      
      <div>
      <section className="hero">
      <div className="container">
        <Slide />
        </div>
        </section>
        <Product />
      </div>
    );
  }
}
export default Home;
