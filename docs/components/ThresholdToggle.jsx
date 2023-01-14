
var React = require('react')
var cx = require('classnames')

var ThresholdToggle = React.createClass({

  handleChange: function(e) {
    var value = e.target.value
    this.props.updateThreshold(value)
  },

  render: function() {
    var self = this
    var buttons = [
      { text: 'None', value: 0 },
      { text: 'AA Large', value: 3 },
      { text: 'AA', value: 4.5 },
      { text: 'AAA', value: 7 },
    ]

    var renderButton = function(button, i) {
      var checked = (button.value == self.props.threshold)
      return (
        <label key={i}>
          <input type="radio"
            value={button.value}
            checked={checked}
            onChange={self.handleChange}
            className="hide"/>
          <span className={cx('btn', {
            'rounded-left': (i === 0),
            'rounded-right