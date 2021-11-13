import './App.css';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Security from './components/Security.jsx';
import SecurityFetch from './components/SecurityFetch';
import NoMatch from './components/NoMatch.jsx';
import facade from './facade';
import { Container, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Thread from './components/Thread';
import Routering from './components/Routering';
import SignIn from './components/SignIn';




function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('  SignIn and you will have agood detials');

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
    setErrorMessage('Logged out.')
  };

  return (
    <Container>
      <Router>
        <Header facade={facade} loggedIn={loggedIn} />
        <Switch>
          <Route  exact path="/">
            <Home/>
          </Route>
          <Route  path="/signin">
            <SignIn
            logout={logout}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            facade={facade}
            setErrorMessage={setErrorMessage}
            />
            </Route>
          <Route path="/security">
            {facade.hasUserAccess('user', loggedIn) && 
              <Security facade={facade} setErrorMessage={setErrorMessage}/>}
          </Route>
          <Route path="/thread">
            {facade.hasUserAccess('user', loggedIn) && 
              <Thread facade={facade} setErrorMessage={setErrorMessage}/>}
          </Route>
          <Route path="/routering">
            {facade.hasUserAccess('user', loggedIn) && 
              <Routering facade={facade} setErrorMessage={setErrorMessage}/>}
          </Route>
          <Route path="/securityfetch">
            {facade.hasUserAccess('admin', loggedIn) && 
              <SecurityFetch facade={facade} setErrorMessage={setErrorMessage} />}
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
      <Alert className="mt-4" >Status: {errorMessage}</Alert>
    </Container>
  );
}

export default App;
