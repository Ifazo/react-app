/* eslint-disable react/prop-types */
import { Component } from "react";
import ProductDetails from "../components/ProductDetails";
import axios from "axios";

export default class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    this.fetchProduct();
  }

  fetchProduct() {
    const { match } = this.props;
    const { id } = match.params;
    axios
      .get(`/product/${id}`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          product: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <ProductDetails product={this.state.product} />
      </div>
    );
  }
}
