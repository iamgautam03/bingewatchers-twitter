import React from 'react';
import Tweet from './Tweet';

export default function MyTweets(props) {
  return (
    <div className="container">
      <div className="row my-5 mx-1">
        <h3 className="text-center">Your Tweets</h3>
        <Tweet tweets={props.tweets} userId={props.userId} />
      </div>
    </div>
  );
}
