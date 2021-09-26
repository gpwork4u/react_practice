import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Test from './Test';
import App from './App'
import Form from './Form'
import Todo from './Todo'
import MoneyView from './MoneyView'
import Barchart from './chart/barchart'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li><Link to="/">App</Link></li>
        <li>
          <Link to='/test'>Test</Link>
        </li>
        <li>
          <Link to='/Form'>Form</Link>
        </li>
        <li>
          <Link to='/Todo'>Todo</Link>
        </li>
        <li>
          <Link to='/MoneyView'>MoneyView</Link>
        </li>
        <li>
          <Link to='/BarChart'>BarChart</Link>
        </li>
      </ul>
      <hr/>
      <Route exact path="/" component={App}/>
      <Route path="/test" render={props =><Test />} />
      <Route path="/form" render={props =><Form />} />
      <Route path="/todo" render={props =><Todo />} />
      <Route path="/moneyview" render={props =><MoneyView />} />
      <Route path="/barchart" render={props =><Barchart />} />

    </div>
  </Router>,
  document.getElementById('root'));
// ReactDOM.render(
//   <React.StrictMode>
//     <Group />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
