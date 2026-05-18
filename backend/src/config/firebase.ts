import admin from 'firebase-admin';
import path from 'path';

const serviceAccount = require(
  path.resolve(__dirname, "../secrets/recognize-students-face-firebase-adminsdk-fbsvc-d6dd734266.json")
);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const db = admin.firestore();
export const timestampServidor = admin.firestore.FieldValue.serverTimestamp;