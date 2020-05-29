import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import TermsOfUse from './components/TermsOfUse';
import PrivacyPolicy from './components/PrivacyPolicy';
import Contact from "./components/Contact"
import Career from './components/Career';
import AppAdmin from './admin/App';
import Review from './components/Review';
import GetStarted from "./components/GetStarted"
import Login from './admin/components/Login';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component = {App}/>
      <Route path = "/terms-of-use" component ={TermsOfUse}/>
      <Route path = "/privacy-policy" component ={PrivacyPolicy}/>
      <Route path = "/contact" component ={Contact}/>
      <Route path = "/career" component ={Career}/>
      <Route path = "/admin" component = {AppAdmin}/>
      <Route path = "/review" component = {Review}/>
      <Route path = "/getstarted" component = {GetStarted} />
    </div>
  </Router>
)

ReactDOM.render(routing,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
