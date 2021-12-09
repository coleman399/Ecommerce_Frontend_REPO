import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <div>
      {user && <h4>Welcome {user.username}</h4>}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {!user && (
          <React.Fragment>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="login">Log in</Link>
            </li>
          </React.Fragment>
        )}
        {user && (
          <React.Fragment>
            <li>
              <Link to="/logout">Log out</Link>
            </li>
          </React.Fragment>
        )}
      </ul>
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
