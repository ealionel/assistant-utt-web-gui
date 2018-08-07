// import Dialogflow from 'dialogflow';

const Dialogflow = require('dialogflow');

// sessionClient
//   .detectIntent(request)
//   .then(responses => {
//     console.log('Detected intent');
//     const result = responses[0];//.queryResult;
//     console.log(JSON.stringify(result, null, 2));
//     // console.log(`  Query: ${result.queryText}`);
//     // console.log(`  Response: ${result.fulfillmentText}`);
//     // if (result.intent) {
//     //   console.log(`  Intent: ${result.intent.displayName}`);
//     // } else {
//     //   console.log(`  No intent matched.`);
//     // }
//   })
//   .catch(err => {
//     console.error('ERROR:', err);
//   });

function sendQuery(query) {

  const projectId = 'assistant-utt-mini-c5680';
  const sessionId = 'session-test';
  const languageCode = 'fr';

  const sessionClient = new Dialogflow.SessionsClient();

  const sessionPath = sessionClient.sessionPath(projectId, sessionId);

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: query,
        languageCode: languageCode,
      },
    },
  };

  sessionClient
    .detectIntent(request)
    .then((responses) => {
      console.log('Detected intent');
      const result = responses[0];//.queryResult;
      console.log(JSON.stringify(result, null, 2));
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
}

export default sendQuery;
