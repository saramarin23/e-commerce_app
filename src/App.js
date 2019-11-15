import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

import Header from "./components/header/Header";
import HomePage from "./pages/homepage/Homepage";
import SignInSignUp from "./pages/signIn-signUp/signIn-signUp";
import ShopPage from "./pages/shop/Shop";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     currentUser: null
  //   };
  // } Because of redux, we don't need the state anymore

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props; //Destructuring

    //Whenever somebody signs in/out we want to be aware of that change
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          // this.setState(
          setCurrentUser(
            //  { currentUser:
            { id: snapShot.id, ...snapShot.data() }
          );
        });
      } //if it exists
      else {
        setCurrentUser(userAuth);
        //We just need what we want to update
      }

      // this.setState({ currentUser: user });
      // createUserProfileDocument(userAuth);
      // console.log(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    //This closes the subscription
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}
//render is exactly like the render above. Ahora cuando entramos ya logueados y accedemos a /signin nos redirecciona automáticamente a la homepage, y cuando nos logueamos directamente nos devuelve a la homepage

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
  //The user that will be used as the payload
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
