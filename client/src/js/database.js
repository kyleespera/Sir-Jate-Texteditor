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

// TODO: Add logic to a method that accepts some content and adds it to the database
// This function will eventually handle putting content into the database
export const putDb = async (content) => {
  // Placeholder for actual implementation
  console.error('putDb not implemented');
  // TODO: Implement database put logic
};

// This function will eventually handle getting content from the database
export const getDb = async () => {
  // Placeholder for actual implementation
  console.error('getDb not implemented');
  // TODO: Implement database get logic
};


initdb();