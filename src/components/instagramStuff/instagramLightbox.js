var React = require('react');
var Lightbox = require('react-lightbox');

var Controls = React.createClass({
  render: function () {
    return DOM.div({
      className: 'my-controls'
    },
      DOM.div({
        className: 'my-button my-button-left',
        onClick: this.props.backward
      }, '<'),
      DOM.div({
        className: 'my-button my-button-right',
        onClick: this.props.forward
      }, '>')
    );
  }
});

React.render(
  <Lightbox
    pictures={[
      'https://pbs.twimg.com/profile_images/269279233/llama270977_smiling_llama_400x400.jpg',
      'https://pbs.twimg.com/profile_images/1905729715/llamas_1_.jpg',
      'http://static.comicvine.com/uploads/original/12/129924/3502918-llama.jpg',
      'http://fordlog.com/wp-content/uploads/2010/11/llama-smile.jpg'
    ]}
    keyboard
    controls={Controls}
  />)

module.exports = Controls;
