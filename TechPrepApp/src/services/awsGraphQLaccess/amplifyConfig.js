import Amplify from 'aws-amplify';
import { APPSYNC_APIKEY } from '@env'

Amplify.configure({
  // Other configuration
  aws_appsync_authenticationType: 'API_KEY',
  aws_appsync_apiKey: APPSYNC_APIKEY,
});