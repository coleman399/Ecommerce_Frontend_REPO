import React, { useState, useEffect } from "react";
import SlidingPane from "react-sliding-pane";
import axios from "axios";
import "react-sliding-pane/dist/react-sliding-pane.css";

const ShoppingCart = (props) => {
  const [state, setState] = useState({
      isPaneOpen: false,
      isPaneOpenLeft: false,
  });
  
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