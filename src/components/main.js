'use strict';

var TheRedLineApp = require('./TheRedLineApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

React.render(<TheRedLineApp />, content);
