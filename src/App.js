import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import SignInSignUpPage from './pages/signpage/SignInSignUpPage';

import { auth, createUserProfileDocument } from './utils/Firebase';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (!userAuth) {
        this.setState({ currentUser: userAuth });
        return;
      }

      const userRef = await createUserProfileDocument(userAuth);

      if (!userRef) return;

      userRef.onSnapshot((snapShot) => {
        if (!snapShot) return;

        this.setState({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data(),
          },
        });
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
