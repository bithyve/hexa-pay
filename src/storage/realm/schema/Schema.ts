import {ObjectSchema} from 'realm';

export const InitSchema: ObjectSchema = {
  name: 'testDB',
  properties: {
    name: 'string',
  },
};

export const Contact: ObjectSchema = {
  name: 'contacts',
  properties: {
    name: 'string',
    pic: 'string',
  },
};
