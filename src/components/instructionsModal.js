var React = require('react')

var InstructionsModal = React.createClass({

  getInitialState: function() {
      return {isClosed: false};
    },

  handleClick: function(event) {
    this.setState({isClosed: true});

  },

  render: function() {
    var isClosed = this.state.isClosed;
    var style = {
    }

    if(this.state.isClosed){
      return <div></div>
    }
    else{
      return (
        <div id="modal"  className="modalDialog">
          <div id="modal_inner">
            <p className="close" onClick={this.handleClick} style={style}>X</p>
            <h2>Welcome to The Red Line!</h2>
            <p>Hover over the map and scroll up or down with your track pad to navigate north or south along the train line.</p>
            <p>Street views update with every stop. Instagram and data visualizations update based on larger areas.</p>
          </div>
        </div>
      );
    }
  }

});

module.exports = InstructionsModal;
