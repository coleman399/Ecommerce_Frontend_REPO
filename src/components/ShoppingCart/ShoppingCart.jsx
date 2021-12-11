import React, { useState, useEffect } from "react";
import SlidingPane from "react-sliding-pane";
import axios from "axios";
import "react-sliding-pane/dist/react-sliding-pane.css";

const ShoppingCart = (props) => {
  const [user, setUser] = useState()
  const [shoppingCart, setShoppingCart] = useState();
  const [state, setState] = useState({
      isPaneOpen: false,
      isPaneOpenLeft: false,
  });
  
  useEffect(() => {
    getUser();
    getShoppingCart();
  },[]);

  const getUser = async () => {
    const jwtToken = localStorage.getItem("token");
      var results = await axios({
        method: 'GET',
        url: 'https://localhost:44394/api/examples/user',
        headers: {Authorization: `Bearer ${jwtToken}`},
      });
      setUser(results.data)
    }
  
  const getShoppingCart = async () => {
    try {
      var results = await axios ({
        method : "GET",
        url : "https://localhost:44394/api/shoppingcart/" + user.shoppingCartId,
      })
      setShoppingCart(results.data)
    } catch (e) {
      console.log(e)
    }  
  }
  
  return (
      <div>
        <button onClick={() => setState({ isPaneOpen: true })}>Shopping Cart</button>
          <SlidingPane
              className="some-custom-class"
              overlayClassName="some-custom-overlay-class"
              isOpen={state.isPaneOpen}
              title="Users Shopping Cart"
              subtitle="Optional subtitle."
              onRequestClose={() => {
                setState({ isPaneOpen: false });
              }}
          >
            <div>

            </div>
            <br />
          </SlidingPane>
      </div>
    );
};

export default ShoppingCart;