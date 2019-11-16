import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import firebaseConfig from '../../env';

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);

        this.auth = app.auth();
        this.db = app.database();
    }

    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) => {
        return this.auth.createUserWithEmailAndPassword(email, password);
    }

    doSignInWithEmailAndPassword = (email, password) => {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    doSignOut = () => {
        return this.auth.signOut();
    }

    doPasswordReset = email => {
        return this.auth.sendPasswordResetEmail(email);
    }

    doPasswordUpdate = password => {
        return this.auth.currentUser.updatePassword(password);
    }

    // *** User API ***
    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');
}

export default Firebase;