var React = require('react')

var InstructionsModal = React.createClass({

  getInitialState: function() {
      return {isClosed: false};
    },

  handleClick: function(event) {
    this.setState({isClosed: true});
    console.log("CLICKED")
    // document.getElementById('modal').style.display='none';
  },

  render: function() {
    var isClosed = this.state.isClosed;
    var style = {
      "display" : "block"
    }

    if (isClosed) {
        style = {
            'display': 'none'
        };
    }

    return (
      <div id="modal" className="modalDialog">
        <div>
          <p className="close" onClick={this.handleClick} style={style}>X</p>
          <h2>Welcome to The Red Line!</h2>
          <p>Hover over the map and scroll up or down with your track pad to navigate north or south along the train line.</p>
          <p>Street views update with every stop. Instagram and data visualizations update based on larger areas.</p>
        </div>
      </div>
    );
  }

});

module.exports = InstructionsModal;




