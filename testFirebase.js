const admin = require('firebase-admin');

// Replace with the path to your service account key JSON file
const serviceAccount = require('path/to/your/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // Add other configuration options if needed
});

const firestore = admin.firestore();
const storage = admin.storage().bucket();

async function testFirestoreConnection() {
  try {
    console.log('Testing Firestore connection...');
    
    // Add Firestore test logic here, e.g., fetching a document
    const docRef = firestore.collection('test').doc('testDocument');
    const docSnapshot = await docRef.get();

    if (docSnapshot.exists) {
      console.log('Firestore connection successful!');
    } else {
      console.log('Firestore document not found.');
    }
  } catch (error) {
    console.error('Firestore connection error:', error);
  }
}

async function testStorageConnection() {
  try {
    console.log('Testing Storage connection...');

    // Add Storage test logic here, e.g., listing files
    const [files] = await storage.getFiles();

    if (files.length > 0) {
      console.log('Storage connection successful!');
    } else {
      console.log('No files found in Storage.');
    }
  } catch (error) {
    console.error('Storage connection error:', error);
  }
}

// Run the tests
testFirestoreConnection();
testStorageConnection();
