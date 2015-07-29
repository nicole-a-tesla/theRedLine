var React = require('react');

//the images themselves
var InstagramImage = React.createClass({

  render: function() {
    console.log('RENDERING INSTAGRAM IMAGE');
    return (
      <li className="instagramImageListItem">
        <img className="instagramImage" src={this.props.imageUrl} alt="Instagram picture"/>
      </li>
    );
  }
});

module.exports = InstagramImage;
