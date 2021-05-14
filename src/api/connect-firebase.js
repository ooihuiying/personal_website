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
 * Orderby needs to be there in order for StartAfter, StartAt, endAt etc to work. IT defined
 * the field of start/end value
 */
class FirebaseWrapper {

    constructor(path) {
        this._ref = firebase.database().ref(path);
        this.lastDocument = null;
        this.firstDocument = null;
        this.LIMIT = 2;
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
        return this._ref
            .orderByChild("date") // date in ascending order
            .limitToFirst(this.LIMIT)
            .once("value")
            .then(snapshot => {
                let total = [];
                var temp = [];
                snapshot.forEach(post => {
                    //add new element to the front of the array
                    temp = temp.concat(post.val().date);
                    total = total.concat(post.val());
                })
                if (temp.length > 0) {
                    this.lastDocument = temp[temp.length - 1];
                    this.firstDocument = temp[0];
                }
                return total;
            }).catch(console.error);
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
                    temp = temp.concat(post.val().date);
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
            .limitToLast(this.LIMIT + 1)
            .endBefore(this.firstDocument) // exclusive
            .once("value")
            .then(snapshot => {
                let total = [];
                var temp = [];
                snapshot.forEach(post => {
                    //add new element to the front of the array
                    temp = temp.concat(post.val().date);
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
