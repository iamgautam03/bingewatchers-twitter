import React, { useEffect, useState } from 'react';
import { tweetsAPI } from '../apis/tweet';
import Tweet from './Tweet';
import auth from '../apis/auth';

export default function TrendingTweets() {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    const getTweets = async () => {
      const trendingTweets = await tweetsAPI.getTrendingTweets();
      setTweets(trendingTweets);
    };
    getTweets();
  }, []);
  let user = auth.getUser();
  return (
    <div className="container">
      <div className="row my-5 mx-1">
        <h3 className="text-center">See What's Happening Around</h3>
        <Tweet tweets={tweets} userId={user ? user.id : null} />
      </div>
    </div>
  );
}
