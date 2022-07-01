import db from './realm';
import * as schema from './schema/Schema';

const initDb = (key: Uint8Array) => {
  db.init(key);
};

const addContact = async (props: {name: string; pic: string}) => {
  if (props.name === '') {
    return false;
  }

  try {
    db.create(schema.Contact.name, props, true);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

const getAllContacts = async () => {
  try {
    const cts = db.objects(schema.Contact.name);
    const sCts = cts?.sorted('name');
    return sCts;
  } catch (e) {
    console.log(e);
  }
};

export default {initDb, addContact, getAllContacts};
