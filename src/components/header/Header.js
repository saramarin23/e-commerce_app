import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
//It lets us modify our component to have access to things related to redux
import { ReactComponent as Logo } from "../../assets/crown.svg";
//This is a special syntax in React for importing SVG.
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import "./Header.scss";

import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {/* <Link className="option" to="/signin">
        SIGN IN
      </Link> */}
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      {/* auth.signOut viene dada por la librería de Firebase */}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  // currentUser: state.user.currentUser
  currentUser, //Lo hemos destructurado
  hidden
});

export default connect(mapStateToProps)(Header);
//Now we're getting that null value as currentUser being passed as currentUser, so now we can delete the props in app.js
