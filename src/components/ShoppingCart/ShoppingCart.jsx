import React, { Component, useState } from "react";
import { render } from "react-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

const ShoppingCart = (props) => {
    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
    });
    
    return (
        <div>
      <button onClick={() => setState({ isPaneOpen: true })}>
        Shopping Cart
      </button>
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
        <div>This is where your plants are!</div>
        <br />
      </SlidingPane>
    </div>
  );
};
export default ShoppingCart;