var React = require('react')

var InstructionsModal = React.createClass({

  render: function() {
    return (
      <div id="modal" class="modalDialog">
        <div>
          <a href="#close" title="Close" class="close">X</a>
          <h2>Welcome to The Red Line!</h2>
          <p>Hover over the map and scroll up or down with your track pad to navigate north or south along the train line.</p>
        </div>
      </div>
    );
  }
});

module.exports = InstructionsModal;