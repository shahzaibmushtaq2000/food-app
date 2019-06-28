import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import home from './pages/home';
import about from './pages/about';
import contact from './pages/contact';
import signinuser from './signinuser';
import signupuser from './signupuser';
import signuprestaurant from './signuprestaurant';



function Approuter(){
    return(
        <Router>
        <Route path="/Home/" exact component={home} />
        <Route path="/about/" component={about} />
        <Route path="/contact/" component={contact} />
        <Route path="/signupuser/" component={signupuser} />
        <Route path="/signuprestaurant/" component={signuprestaurant} />
        <Route path="/signinuser/" component={signinuser} />
        <Route path="/users/" component={contact} />
        </Router>
    );
}
export default Approuter;