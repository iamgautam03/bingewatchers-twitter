import React, { useEffect, useState } from 'react';
import Tweet from './Tweet';
import { tweetsAPI } from '../apis/tweet';
import auth from '../apis/auth';
export default function TweetGrid() {
  const [tweets, setTweets] = useState([]);
  let user = auth.getUser();
  useEffect(() => {
    const getTweets = async () => {
      if (user) {
        const id = auth.getUser().id;
        const allTweets = await tweetsAPI.getAllTweets(id);
        setTweets(allTweets);
      } else {
        const trendingTweets = await tweetsAPI.getTrendingTweets();
        setTweets(trendingTweets);
      }
    };
    getTweets();
  }, [user]);

  return (
    <div className="container">
      <div className="row my-5 mx-1">
        <h3 className="text-center">
          {user ? 'Your Tweets' : "See What's Happening Around"}
        </h3>
        <Tweet tweets={tweets} />
      </div>
    </div>
  );
}
