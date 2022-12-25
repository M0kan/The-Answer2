
var React = require('react')

var HeadingBadge = React.createClass({

  render: function () {
    if (!this.props.combo.accessibility) {
      return false
    }
    var level = this.props.combo.