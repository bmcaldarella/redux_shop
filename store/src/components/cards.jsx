import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ADD_TO_CART } from "../redux/actions";
import "../components/cards.css";

const Cards = () => {
  const inventory = useSelector((state) => state.inventory);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="cards-container"> 
        {inventory.map((item) => (
          <div key={item.name} className="card-wrapper"> 
            <Card  className="container">
              <Card.Img className="image-card" variant="top" src={item.img} alt={item.name} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Precio: ${item.price}</Card.Text>
                <Button variant="primary" onClick={() => dispatch(ADD_TO_CART(item.name))}>
                  ADD
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
