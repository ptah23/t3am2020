import React from 'react';
import * as RealmWeb from 'realm-web';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Visitor from './visitor/Visitor';
import Receptionist from './receptionist/Receptionist';
import Security from './security/Security';
import Manager from './manager/Manager';
import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const app = new RealmWeb.App({ id: "logbook-ikpwt" });

function App() {
  return (

      <Router>
        <div>
          <nav>
                  <Container fluid>
                      <Row>
                          <Col><Link to="/visitor">Visitor</Link></Col>
                          <Col><Link to="/receptionist">Receptionist</Link></Col>
                          <Col><Link to="/security">Security</Link></Col>
                          <Col><Link to="/manager">Manager</Link></Col>
                      </Row>
                  </Container>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/visitor">
              <Visitor />
            </Route>
            <Route path="/receptionist">
              <Receptionist />
            </Route>
            <Route path="/security">
              <Security />
            </Route>
            <Route path="/manager">
              <Manager />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
