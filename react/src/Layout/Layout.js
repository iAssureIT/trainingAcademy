import React,{Component}                         from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

import Homepage                                  from "../pages/Homepage/Homepage.js";

const WebLayout = () => (
        <div>
              <Route path="/"                       exact strict component={Homepage}  />
        </div>
);

 function Layout() {
  return (
    <div>
      <Router>
        {/*<Header />*/}
        <Switch>
          <Route path="/" component={ WebLayout } />
        </Switch>
        {/*<Footer/>*/}
      </Router>
    </div>
  );
}

export default Layout;