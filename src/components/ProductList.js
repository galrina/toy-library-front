import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import NavigationBar from "./NavigationBar";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: "Product 1",
          price: 10,
          image: "https://via.placeholder.com/150",
        },
        {
          id: 2,
          name: "Product 2",
          price: 20,
          image: "https://via.placeholder.com/150",
        },
        {
          id: 3,
          name: "Product 3",
          price: 30,
          image: "https://via.placeholder.com/150",
        },
      ],
      cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
    };
  }

  handleAddToCart = (id) => {
    const { products, cartItems } = this.state;
    const productToAdd = products.find((product) => product.id === id);
    if (cartItems.find((item) => item.id === id)) {
      console.log("this product already available in cart");
      return;
    }
    const newCartItems = [...cartItems, productToAdd];
    this.setState({ cartItems: newCartItems });
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  render() {
    const { products, cartItems } = this.state;

    return (
      <Container>
        <NavigationBar />
        <Row>
          {products.map((product) => (
            <Col xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card className="my-3">
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{`$${product.price}`}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => this.handleAddToCart(product.id)}
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="my-5">
          <Button variant="primary" href="/cart">
            View Cart ({cartItems.length})
          </Button>
        </div>
      </Container>
    );
  }
}

export default ProductList;