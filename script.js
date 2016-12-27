$(document).ready(function() {
  function twitchData (json, message, module, user) {
    if(json.stream) {
      document.getElementById(module).style = "background-color: #93E251";
      var status = json.stream.channel.status;
      var message = document.getElementById(message);
      message.innerHTML = status;
    }
  }

  $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?", function(json){
  twitchData(json, "freecodecamp-message", "freecodecamp-module", "freecodecamp");
  });

  $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/thehypoxiaxp?callback=?", function(json){
  twitchData(json, "thehypoxiaxp-message", "thehypoxiaxp-module", "thehypoxiaxp");
  });
});
