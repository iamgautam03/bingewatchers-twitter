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
  deleteDoc,
} from 'firebase/firestore';

export const tweetsAPI = {
  add: async (userId, name, tweetDescription) => {
    await addDoc(collection(db, 'tweets'), {
      tweet: tweetDescription,
      createdOn: new Date().getTime(),
      likes: 0,
      createdBy: userId,
      tweetBy: name,
      likedBy: [],
    });
  },
  get: async (tweetId) => {
    const tweet = await getDoc(doc(db, 'tweets', tweetId));
    if (tweet.exists()) return tweet.data();
    else throw new Error(`No Tweets Exists with id: ${tweetId}`);
  },
  increaseLikes: async (likedBy, tweetId, noOfLikes) => {
    const tweetRef = doc(db, 'tweets', tweetId);
    const tweet = (await getDoc(tweetRef)).data();
    tweet.likedBy.push(likedBy);
    await updateDoc(tweetRef, {
      likes: tweet.likes + noOfLikes,
      likedBy: tweet.likedBy,
    });
  },
  decreaseLike: async (disLikedBy, tweetId) => {
    const tweetRef = doc(db, 'tweets', tweetId);
    const tweet = (await getDoc(tweetRef)).data();
    const likedBy = tweet.likedBy;
    let indx = likedBy.findIndex((e) => e === disLikedBy);
    likedBy.splice(indx, 1);
    await updateDoc(tweetRef, {
      likes: Math.max(tweet.likes - 1, 0),
      likedBy: likedBy,
    });
  },
  getAllTweets: async (createdBy) => {
    const tweetsRef = collection(db, 'tweets');
    const queryStmt = query(tweetsRef, where('createdBy', '==', createdBy));

    const resultSet = await getDocs(queryStmt);
    const tweets = [];
    resultSet.forEach(async (tweet) => {
      tweets.push({
        ...tweet.data(),
        id: tweet.id,
      });
    });
    return tweets;
  },
  getTrendingTweets: async () => {
    const tweetsRef = collection(db, 'tweets');
    const queryStmt = query(tweetsRef, orderBy('likes', 'desc'), limit(10));

    const resultSet = await getDocs(queryStmt);
    const tweets = [];
    resultSet.forEach(async (tweet) => {
      tweets.push({
        ...tweet.data(),
        id: tweet.id,
      });
    });
    return tweets;
  },
  remove: async (tweetId) => {
    const tweetRef = doc(db, 'tweets', tweetId);
    await deleteDoc(tweetRef);
  },
};
