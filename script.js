$(document).ready(function() {
  function twitchData (json, message, module, user) {
    if(json.stream) {
      document.getElementById(module).style = "background-color: lightgreen";
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

  $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/esl_sc2?callback=?", function(json){
  twitchData(json, "esl_sc2-message", "esl_sc2-module", "esl_sc2");
  });

  $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/ogamingsc2?callback=?", function(json){
  twitchData(json, "ogamingsc2-message", "ogamingsc2-module", "ogamingsc2");
  });

  $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/shannanina?callback=?", function(json){
  twitchData(json, "shannanina-message", "shannanina-module", "shannanina");
  });

  $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/misscoookiez?callback=?", function(json){
  twitchData(json, "misscoookiez-message", "misscoookiez-module", "misscoookiez");
  });

  $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/drezzdie?callback=?", function(json){
  twitchData(json, "drezzdie-message", "drezzdie-module", "drezzdie");
  });
});
