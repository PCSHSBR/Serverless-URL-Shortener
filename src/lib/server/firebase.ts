import { FIREBASE_ADMIN_SDK_CREDENTIAL } from '$env/static/private';
import * as admin from 'firebase-admin';
import { initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase/auth';
const serviceAccount = JSON.parse(
  FIREBASE_ADMIN_SDK_CREDENTIAL
);
if (admin.apps.length === 0) {
  initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

export { admin };