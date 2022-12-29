
var React = require('react')
//var qs = require('query-string')
//var _debounce = require('lodash').debounce
var colorable = require('../..')
var SuperModal = require('./SuperModal.jsx')
var MatrixRow = require('./MatrixRow.jsx')
var ColorList = require('./ColorList.jsx')
var Toolbar = require('./Toolbar.jsx')
var ColorPreview = require('./ColorPreview.jsx')

var MatrixDemo = React.createClass({

  getInitialState: function() {
    var params = {}
    console.log('query', this.props.query);
    if (typeof window !== 'undefined') {
      //params = qs.parse(window.location.search)
      //params = this.props.query
    }
    if (params.colors) {
      var colors = params.colors.split('.')
    } else {
      var colors = this.props.colors
    }
    return {
      colors: colors,
      matrix: colorable(colors),
      threshold: 0,
      modalColor: false,
    }
  },

  //pushState: _debounce(function() {
  //  if (!window) return false
  //  var colorString = this.state.colors.join('.')
  //  var params = {
  //    colors: colorString,
  //  }
  //  var query = '?' + qs.stringify(params)
  //  window.history.pushState(params,