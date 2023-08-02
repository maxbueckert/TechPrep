// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Score, Question } = initSchema(schema);

export {
  User,
  Score,
  Question
};