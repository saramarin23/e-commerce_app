import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/header/Header";
import HomePage from "./pages/homepage/Homepage";
import SignInSignUp from "./pages/signIn-signUp/signIn-signUp";
import ShopPage from "./pages/shop/Shop";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    //Whenever somebody signs in/out we want to be aware of that change
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState(
            {
              currentUser: { id: snapShot.id, ...snapShot.data() }
            },
            () => {
              // console.log(this.state);
            }
          );
        });
        // console.log(this.state); Aquí no puede ir xq setState es asíncrono y puede que no se le haya terminado de llamar
      } //if it exists
      else {
        this.setState({ currentUser: userAuth });
      }

      // this.setState({ currentUser: user });
      // createUserProfileDocument(userAuth);
      // console.log(userAuth);
    });
    //Method that we get from firebase
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    //This closes the subscription
  }

  render() {
    console.log(this.state.currentUser);
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* Exact sin nada sería true, luego sería el path exacto */}
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
