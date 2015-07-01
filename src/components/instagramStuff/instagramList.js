var React = require('react');
var InstagramImage = require('./instagramImage')
var $ = require("jquery")
// list of individual images for a given stop. iterate through and make em
var InstagramList = React.createClass({

  getInitialState: function() {
    return  {urls: []}
  },

  loadInstagramData: function(event) {
    $.ajax({
      url: "https://api.instagram.com/v1/media/search?lat=" + this.props.data.lat + "&lng=" + this.props.data.long + "&distance=1000&client_id=fbd7e0b57e2744d99de340fe10de9dbe",
        type: "GET",
        cache: false,
        dataType: 'jsonp',

        success: function(data) {
          // console.log("SUCCESS");
          // console.log(data);
          var newUrls = []

          for (var i = 0; i < data["data"].length; i++) {
            newUrls.push(data["data"][i]["images"]["standard_resolution"]["url"]);
          }

          this.setState({ urls: newUrls });

        }.bind(this),
        error: function(xhr, status, err) {
          // console.log("ERROR");
          console.error(this.props.url, status, err.toString());;
        }.bind(this)
    });
  },

  componentDidMount: function() {
    this.loadInstagramData();
  },

  render: function() {
    var instagramNodes = this.state.urls.map(function (imageUrl) {
      return (
        <InstagramImage imageUrl={imageUrl}></InstagramImage>
      );
    });

    return (
        <ul id={"near" + this.props.data.station_name}>
          {instagramNodes}
        </ul>
    );
  }
});

module.exports = InstagramList;
