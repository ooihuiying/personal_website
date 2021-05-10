import firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "ooijournal.firebaseapp.com",
    databaseURL: "https://ooijournal.firebaseio.com",
    projectId: "ooijournal",
    storageBucket: "ooijournal.appspot.com",
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_API_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/**
 * Wrapper class to interface with firebase
 */
class FirebaseWrapper {

    constructor(path) {
        this._ref = firebase.database().ref(path);
        this.lastDocument = null;
        this.firstDocument = null;
        this.LIMIT = 10;
    }

    static ref(path) {
        return new FirebaseWrapper(path);
    }

    getAllPosts() {
        return this._ref
            .orderByChild("date") // date in ascending order
            .once("value")
            .then(snapshot => {
                let total = [];
                snapshot.forEach(post => {
                    //add new element to the front of the array
                    total = [post.val()].concat(total);
                })
                return total;
            })
            .catch(console.error);
    }

    get10Posts() {
        if (this.lastDocument === null && this.firstDocument === null) {
            return this._ref
                .orderByChild("date") // date in ascending order
                .limitToFirst(this.LIMIT)
                .once("value")
                .then(snapshot => {
                    let total = [];
                    var temp = [];
                    snapshot.forEach(post => {
                        //add new element to the front of the array
                        temp = temp.concat(post.val().title);
                        total = total.concat(post.val());
                    })
                    if (temp.length > 0) {
                        this.lastDocument = temp[temp.length - 1];
                        this.firstDocument = temp[0];
                    }
                    return total;
                }).catch(console.error);
        } else {
            return this._ref
                .orderByChild("date") // date in ascending order
                .limitToFirst(this.LIMIT)
                .startAt(this.firstDocument) // inclusive
                .once("value")
                .then(snapshot => {
                    let total = [];
                    var temp = [];
                    snapshot.forEach(post => {
                        //add new element to the front of the array
                        temp = temp.concat(post.val().title);
                        total = total.concat(post.val());
                    })
                    if (temp.length > 0) {
                        this.lastDocument = temp[temp.length - 1];
                        this.firstDocument = temp[0];
                    }
                    return total;
                }).catch(console.error);
        }
    }

    getNext10Posts() {
        return this._ref
            .orderByChild("date") // date in ascending order
            .limitToFirst(this.LIMIT)
            .startAfter(this.lastDocument) // exclusive
            .once("value")
            .then(snapshot => {
                let total = [];
                var temp = [];
                snapshot.forEach(post => {
                    //add new element to the front of the array
                    temp = temp.concat(post.val().title);
                    total = total.concat(post.val());
                })
                if (temp.length > 0) {
                    this.lastDocument = temp[temp.length - 1];
                    this.firstDocument = temp[0];
                }
                return total;
            }).catch(console.error);
    }

    getPrev10Posts() {
        return this._ref
            .orderByChild("date") // date in ascending order
            .limitToLast(this.LIMIT)
            .endBefore(this.firstDocument) // exclusive
            .once("value")
            .then(snapshot => {
                let total = [];
                var temp = [];
                snapshot.forEach(post => {
                    //add new element to the front of the array
                    temp = temp.concat(post.val().title);
                    total = total.concat(post.val());
                })
                if (temp.length > 0) {
                    this.lastDocument = temp[temp.length - 1];
                    this.firstDocument = temp[0];
                }
                return total;
            }).catch(console.error);
    }
}

export default FirebaseWrapper;
