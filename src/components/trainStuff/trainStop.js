var React = require('react');

var TrainStop = React.createClass({

  handleClick: function(event) {
  },

  render: function() {
    return (
      <li className="trainStop" id={this.props.stopName + "Menu"} >
        <a href={"#near" + this.props.stopName}>
          <div className="fakeButton">
            {this.props.stopName[0]}
          </div>
        </a>
      </li>
    );
  }
});

module.exports = TrainStop;
