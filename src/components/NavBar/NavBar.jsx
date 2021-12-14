import React from "react";
import SellPlant from "../SellPlant/SellPlant";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from "react-bootstrap/Button"

const NavBar = (props) => {

  const handleOnClick= () => {
    localStorage.clear();
    window.location.href = "/";
  }

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <ShoppingCart 
          toggle={props.toggle} 
          getShoppingCart={props.getShoppingCart}
          shoppingCart={props.shoppingCart}
          user={props.user}  
        />
        <SellPlant 
          user={props.user} 
          addPlant={props.addPlant}
        />
        <Button onClick={()=>handleOnClick()}>Logout</Button>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;

//<nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <button
//     className="navbar-toggler"
//     type="button"
//     data-toggle="collapse"
//     data-target="#navbarSupportedContent"
//     aria-controls="navbarSupportedContent"
//     aria-expanded="false"
//     aria-label="Toggle navigation"
//   >
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <form className="form-inline my-2 my-lg-0">
//     <input
//       className="form-control mr-sm-2"
//       type="search"
//       placeholder="Search by name..."
//       aria-label="Search"
//     />
//     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
//       Search
//     </button>
//   </form>
//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav mr-auto">
//       <li className="nav-item active">
//         {/* Add a Modal for sell plant */}
//         <a className="nav-link" href="#">
//           Sell Plant<span className="sr-only"></span>
//         </a>
//       </li>
//       <li className="nav-item">
//         {/* Add an icon of a shopping cart instead of the words Shopping Cart */}
//         <a className="nav-link" href="#">
//           Shopping cart
//         </a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">
//           Log Out
//         </a>
//       </li>
//     </ul>
//   </div>
// </nav>;
