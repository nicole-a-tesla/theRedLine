var React = require('react');
var InstagramPostsByStop = require('./instagramPostsByStop');
var InstagramList = require('./instagramList');

var InstagramContainer = React.createClass({
  render: function() {
    console.log('rendering instagram container. this.props.data=');
    // console.log(this.props.data);
        // <InstagramPostsByStop data={this.props.data} />
    return (
      <InstagramList data={this.props.data} />
    );
  }
});

module.exports = InstagramContainer;
