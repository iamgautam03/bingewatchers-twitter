import React from 'react';
import { useNavigate } from 'react-router-dom';
import PostTweet from './PostTweet';
import TweetGrid from './TweetGrid';

export default function Dashboard() {
  const navigate = useNavigate();
  if (!sessionStorage.getItem('AuthToken')) {
    navigate('/auth');
  }
  return (
    <div className="container-fluid">
      <div
        className="row m-1 justify-content-evenly align-items-center"
        style={{ backgroundColor: 'var(--my-white)' }}
      >
        <div className="col-2"></div>
        <div className="col-8">
          <PostTweet></PostTweet>
          <TweetGrid></TweetGrid>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}
