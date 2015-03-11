var dotenv = require('dotenv');
dotenv.load();

var TrackerBot = require('./lib/tracker_bot.js');
var Slack = require('slack-client');

var tracker = require('pivotaltracker');
var client = new tracker.Client({trackerToken: process.env.TRACKER_TOKEN});

var token = process.env.SLACK_TOKEN;
var autoReconnect = true;
var autoMark = true;
var slack = new Slack(token, autoReconnect, autoMark);

var trackerBot = new TrackerBot(slack, client, process.env.TRACKER_PROJECT_ID);

slack.on('open', function() {
  console.log("CONNECTED!");
});

slack.on('message', function(message) {
  trackerBot.handleMessage(message);
});

slack.on('error', function(error) {
  console.error(error.msg);
});

slack.login();
