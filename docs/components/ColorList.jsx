

var React = require('react')
var ColorListItem = require('./ColorListItem.jsx')

var ColorList = React.createClass({

  getInitialState: function() {
    return {
      focus: false
    }
  },

  addColor: function(e) {
    var colors = this.props.colors
    colors.push('#444')
    this.props.updateColors(colors)
    this.setState({ focus: this.props.colors.length - 1 })
  },

  renderItem: function(key, i) {
    var self = this
    var color = this.props.colors[i]
    var updateColor = function(hex) {
      var colors = self.props.colors
      colors[i] = hex
      self.props.updateColors(colors)
    }
    var removeColor = function() {
      var colors = self.props.colors
      colors.splice(i, 1)
      self.props.updateColors(colors)
    }
    var ref = 'color-' + i
    var id = color
    var itemId = 'color-item-' + i