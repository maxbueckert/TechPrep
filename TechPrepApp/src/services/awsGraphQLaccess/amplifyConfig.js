import Amplify from 'aws-amplify';
// import "./.env";

// const myAmplifyConfig = {
//   // Other configuration
//   aws_appsync_authenticationType: 'API_KEY',
//   aws_appsync_apiKey: 'da2-jhzqphcnqjbt7m262n7avo3l2u',
// };

// Amplify.configure(myAmplifyConfig);

import { APPSYNC_APIKEY } from '@env'

Amplify.configure({
  // Other configuration
  aws_appsync_authenticationType: 'API_KEY',
  aws_appsync_apiKey: APPSYNC_APIKEY,
});