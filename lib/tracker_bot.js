var method = TrackerBot.prototype;

function TrackerBot(slack, client, projectId) {
  this.slack = slack;
  this.client = client;
  this.projectId = projectId;
};

method.handleMessage = function(message) {
  var channel = this.slack.getChannelGroupOrDMByID(message.channel);
  var that = this;
  var members = channel.members;

  this.client.project(this.projectId).stories.all(function(error, stories) {
    if (error) {
        console.log(error);
    } else {
      for (var i = 0; i < members.length; i ++) {
        that.slack.openDM(members[i], function(dM){
          var dMChannel = that.slack.getChannelGroupOrDMByID(dM.channel.id);
          dMChannel.send("I'm in DM now!");
        });
      }
      channel.send("Next story: " + stories[0].name + " (" + stories[0].url + ")");
    }
  });
};

module.exports = TrackerBot;
