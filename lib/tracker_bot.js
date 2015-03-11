var method = TrackerBot.prototype;

function TrackerBot(slack, client, projectId) {
  this.slack = slack;
  this.client = client;
  this.projectId = projectId;
};

method.handleMessage = function(message) {
  channel = this.slack.getChannelGroupOrDMByID(message.channel);
  this.client.project(this.projectId).stories.all(function(error, stories) {
    if (error) {
        console.log(error);
    } else {
      channel.send("Next story: " + stories[0].name + " (" + stories[0].url + ")");
    }
  });
};

module.exports = TrackerBot;
