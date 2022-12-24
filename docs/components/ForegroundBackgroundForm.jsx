
var React = require('react')
var Color = require('color')
var HslSliders = require('react-hsl-sliders')

var ForegroundBackgroundForm = React.createClass({

  handleForegroundChange: function (e) {
    this.props.setForeground(e.target.value)
  },

  handleBackgroundChange: function (e) {
    this.props.setBackground(e.target.value)
  },

  render: function () {
    var foreground = this.props.foreground
    var background = this.props.background
    try {
      var light = Color(background).light()
    } catch(e) {
      var light = true
    }
    var styles = {
      container: {
        color: light ? '#111' : '#fff'
      },
      input: {
        color: 'in