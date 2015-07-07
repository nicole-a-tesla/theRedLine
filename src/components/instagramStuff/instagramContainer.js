var React = require('react');
var InstagramPostsByStop = require('./instagramPostsByStop');
var InstagramList = require('./instagramList');

var InstagramContainer = React.createClass({
  render: function() {
    return (
      <InstagramList data={this.props.data} />
    );
  }
});

module.exports = InstagramContainer;
