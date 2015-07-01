var React = require('react');
var InstagramPostsByStop = require('./instagramPostsByStop');

var InstagramContainer = React.createClass({
  render: function() {
    // console.log('rendering instagram container. this.props.data=');
    // console.log(this.props.data);
    return (
        <InstagramPostsByStop data={this.props.data} />
    );
  }
});

module.exports = InstagramContainer;
