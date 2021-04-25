// // Import FirebaseAuth and firebase.
// import React from 'react';

import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import Dashboard from '../Dashboard/Dashboard'
 
// Configure Firebase.
var config = {
    apiKey: "AIzaSyAJmTMuuAhFREEI8THl2f3SDAOewLjeozU",
    authDomain: "interviews-4b797.firebaseapp.com",
    projectId: "interviews-4b797",
    storageBucket: "interviews-4b797.appspot.com",
    messagingSenderId: "114506550373",
    appId: "1:114506550373:web:cce92fc58d26ea99124a8c"
  };

firebase.initializeApp(config);
 
class SignInScreen extends React.Component {
 
  // The component's Local state.
  state = {
    isSignedIn: false // Local signed-in state.
  };
 
  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };
 
  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
  }
  
  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }
 
  render() {
    if (!this.state.isSignedIn) {
      return (
        <div>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
    }
    return (

      <div>
        {/* <h1>My App</h1>
        <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
        <a onClick={() => firebase.auth().signOut()}>Sign-out</a> */}
        <Dashboard name= {firebase.auth().currentUser.displayName} email = {firebase.auth().currentUser.email}></Dashboard>
      </div>
    );
  }
}
export default SignInScreen;