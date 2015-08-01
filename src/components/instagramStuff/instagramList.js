var React = require('react');
var InstagramImage = require('./instagramImage')
var $ = require("jquery")
var InstagramList = React.createClass({

  getInitialState: function() {
    // console.log('getting initial ');
    return  {urls: []}
  },

  loadInstagramData: function(event) {
    $.ajax({
      url: "https://api.instagram.com/v1/media/search?lat=" + this.props.data.lat + "&lng=" + this.props.data.long + "&distance=1000&client_id=fbd7e0b57e2744d99de340fe10de9dbe",
        type: "GET",
        cache: false,
        dataType: 'jsonp',

        success: function(data) {
          console.log('SUCCESSFUL INSTAGRAM GET');
          var newUrls = []

          for (var i = 0; i < data["data"].length; i++) {
            newUrls.push(data["data"][i]["images"]["standard_resolution"]["url"]);

      // temp limit to 12 images:
      // for (var i = 0; i < 12; i++) {
            // if (data["data"][i]["images"]) { // make sure there's 12 images. we'll do this less jankily later
            //   newUrls.push(data["data"][i]["images"]["standard_resolution"]["url"]);
            // } else {
            //   newUrls.push(data["data"][i-1]["images"]["standard_resolution"]["url"]); // repeat last image if there aren't enough. to be seriously de-janked at a future date
            // }
            }

          this.setState({ urls: newUrls });

        }.bind(this),

        error: function(xhr, status, err) {
          console.log("INSTAGRAM 💩");
          console.error(this.props.url, status, err.toString());
        }.bind(this)
    });
  },

  componentWillReceiveProps: function() {
    console.log('calling componentWillReceiveProps!');
    this.loadInstagramData();
  },

  render: function() {
    console.log('RENDERING INSTAGRAM LIST');


// cant put this.loadInstagramData(); here! infinite loop :(

    var instagramNodes = this.state.urls.map(function (imageUrl) {
      return (
        <InstagramImage imageUrl={imageUrl}></InstagramImage>
      );
    });

    return (
        <ul className='instagramList' id={"instagramNear" + this.props.data.station_name} >
          {instagramNodes}
        </ul>
    );
  }
});

module.exports = InstagramList;
