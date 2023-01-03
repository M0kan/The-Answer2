
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
  //  window.history.pushState(params, 'Colorable', query)
  //}, 200),

  updateColors: function(colors) {
    this.setState({ colors: colors })
    this.updateMatrix()
  },

  updateThreshold: function(threshold) {
    this.setState({ threshold: threshold }, function() {
      this.updateMatrix()
    })
  },

  updateMatrix: function() {
    try {
      var matrix = colorable(this.state.colors, { threshold: this.state.threshold })
      this.setState({ matrix: matrix })
    } catch(e) {
    }
  },

  openModal: function(color) {
    this.setState({ modalColor: color })
  },

  closeModal: function() {
    this.setState({ modalColor: false })
  