
var React = require('react')
var Router = require('react-router')
var Routes = require('./Routes.jsx')

if (typeof document !== 'undefined') {
  var initialProps = JSON.parse(document.querySelector('#initial-props').innerHTML)
  Router.run(Routes, Router.HistoryLocation, function (Handler, state) {
    //initialProps.params = state.params
    React.render(React.createElement(Handler, ini