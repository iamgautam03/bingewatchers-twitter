import { db } from './crud';
import {
  doc,
  addDoc,
  getDoc,
  collection,
  updateDoc,
  query,
  where,
  getDocs,
  orderBy,
  limit,
} from 'firebase/firestore';

export const tweetsAPI = {
  add: async (id, name, tweetDescription) => {
    await addDoc(collection(db, 'tweets'), {
      tweet: tweetDescription,
      createdOn: new Date().getTime(),
      likes: 0,
      createdBy: id,
      tweetBy: name,
    });
  },
  get: async (tweetId) => {
    const tweet = await getDoc(doc(db, 'tweets', tweetId));
    if (tweet.exists()) return tweet.data();
    else throw new Error(`No Tweets Exists with id: ${tweetId}`);
  },
  increaseLikes: async (tweetId, noOfLikes) => {
    const tweetRef = doc(db, 'tweets', tweetId);
    await updateDoc(tweetRef, {
      likes: db.firestore.FieldValue.increment(noOfLikes),
    });
  },
  decreaseLike: async (tweetId) => {
    const tweet = this.get(tweetId);
    const tweetRef = doc(db, 'tweets', tweetId);
    await updateDoc(tweetRef, {
      likes: Math.max(tweet.data.likes - 1, 0),
    });
  },
  getAllTweets: async (userId) => {
    const tweetsRef = collection(db, 'tweets');
    const queryStmt = query(tweetsRef, where('createdBy', '==', userId));

    const resultSet = await getDocs(queryStmt);
    const tweets = [];
    resultSet.forEach((tweet) => {
      tweets.push(tweet.data());
    });

    return tweets;
  },
  getTrendingTweets: async () => {
    const tweetsRef = collection(db, 'tweets');
    const queryStmt = query(tweetsRef, orderBy('likes', 'desc'), limit(10));

    const resultSet = await getDocs(queryStmt);
    const tweets = [];
    resultSet.forEach((tweet) => {
      tweets.push(tweet.data());
    });

    return tweets;
  },
};
