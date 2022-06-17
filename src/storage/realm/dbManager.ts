import db from './realm';

const initDb = (key: Uint8Array) => {
  db.init(key);
};

export default {initDb};
