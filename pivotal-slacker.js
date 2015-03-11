var Slack = require('slack-client');
var dotenv = require('dotenv');
dotenv.load();

var token = process.env.SLACK_TOKEN;
var autoReconnect = true;
var autoMark = true;

var slack = new Slack(token, autoReconnect, autoMark);

slack.on('open', function() {
  console.log("CONNECTED!");
});

slack.on('message', function(message) {
  channel = slack.getChannelGroupOrDMByID(message.channel);
  channel.send("Yo yo yo!");
});

slack.on('error', function(error) {
  console.error(error.msg);
});

slack.login();
