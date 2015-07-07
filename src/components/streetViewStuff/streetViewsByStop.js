var React = require('react');
var StreetViewList = require('./streetViewList');

var StreetViewsByStop = React.createClass({
    render: function() {
      console.log("Is the streetViewsByStop method even getting called??");
      var streetViewNodes = this.props.data.map(function(trainStopData){
        return (
          <StreetViewList data={trainStopData} />
        );
      });

      return (
        <div id="streetViewContainer">
          <ul className="streetViewByStop">
            {streetViewNodes}
          </ul>
        </div>
      )
    }
})

module.exports = StreetViewsByStop;
