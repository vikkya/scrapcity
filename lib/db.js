import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

//setup db
const adapter = new FileSync('db.json')
const db = low(adapter)

//set some defaults
db.defaults({ twitter: [], instagram: [] })
  .write()

export default db;