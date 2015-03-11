[![Circle CI](https://circleci.com/gh/spilth/pivotal-slacker.svg?style=svg)](https://circleci.com/gh/spilth/pivotal-slacker)

# Pivotal Slacker

## Setup

You'll need node installed:

    $ brew install npm

Then checkout the project:

    $ git clone git@github.com:spilth/pivotal-slacker.git

Create a `.env` file in the root of the project with the following contents:

    SLACK_TOKEN=<your-bots-slack-token>
    TRACKER_TOKEN=<your-tracker-api-token>
    TRACKER_PROJECT_ID=<your-tracker-project-id>

Then run:

    node pivotal-slacker.js

