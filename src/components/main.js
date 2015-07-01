'use strict';

var TheRedLineApp = require('./TheRedLineApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

// var Routes = (
//   <Route handler={TheRedLineApp}>
//     <Route name="/" handler={TheRedLineApp}/>
//   </Route>
// );

React.render(<TheRedLineApp />, content);
//
// Router.run(Routes, function (Handler) {
//   React.render(<Handler/>, content);
// });
