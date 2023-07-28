// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Score } = initSchema(schema);

export {
  User,
  Score
};