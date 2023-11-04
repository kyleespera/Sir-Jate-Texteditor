import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

  export const dbActions = async (action, content = null) => {
    console.log(`${action.toUpperCase()} to the database`);
  
    // Common code for opening a connection to the database.
    const contactDb = await openDB('jate', 1);
    const tx = contactDb.transaction('jate', action === 'put' ? 'readwrite' : 'readonly');
    const store = tx.objectStore('jate');
  
    let result;
    switch (action) {
      case 'put':
        // Use the .put() method on the store and pass in the content.
        const putRequest = store.put({ id: 1, value: content });
        result = await putRequest;
        console.log('🚀 - data saved to the database', result);
        break;
      case 'get':
        // Use the .getAll() method to get all data in the database.
        const getAllRequest = store.getAll();
        result = await getAllRequest;
        console.log('result.value', result);
        return result?.value;
      default:
        throw new Error('Unsupported action');
    }
  };
  
  export const putDb = async (content) => {
    return dbActions('put', content);
  };
  
  export const getDb = async () => {
    return dbActions('get');
  };
  
  // Since initdb() was called at the bottom previously, we assume it's necessary to initialize the database.
  // This call should be moved to a place that makes sense in your application initialization code.
  initdb();
  