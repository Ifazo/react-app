import { Component } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";

export default class ProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts() {
    axios
      .get("/products")
      .then((response) => {
        console.log(response.data.products);
        this.setState({
          products: response.data.products,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    );
  }
}
