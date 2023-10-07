import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PostTweet from './PostTweet';
import MyTweets from './MyTweets';
import auth from '../apis/auth';
import { tweetsAPI } from '../apis/tweet';

export default function Dashboard() {
  const navigate = useNavigate();
  if (!sessionStorage.getItem('AuthToken')) {
    navigate('/auth');
  }
  const username = auth.getUser().name;
  const [tweet, setTweet] = useState('');
  const handleClear = () => {
    document.getElementById('tweetbox').value = '';
    setTweet('');
  };
  const handleTweetTyping = () => {
    setTweet(document.getElementById('tweetbox').value);
  };
  const handlePostTweet = async () => {
    let user = auth.getUser();
    await tweetsAPI.add(user.id, user.name, tweet);
    window.showSnackbar('Tweet Published Successfully!', 'alert-success');
    setTweet('');
    await getTweets();
  };
  const [tweets, setTweets] = useState([]);
  let user = auth.getUser();
  const getTweets = async () => {
    const id = auth.getUser().id;
    const allTweets = await tweetsAPI.getAllTweets(id);
    setTweets(allTweets);
  };
  useEffect(() => {
    getTweets();
  }, []);
  return (
    <div className="container-fluid">
      <div
        className="row m-1 justify-content-evenly align-items-center"
        style={{ backgroundColor: 'var(--my-white)' }}
      >
        <div className="col-2"></div>
        <div className="col-8">
          <PostTweet
            handleClear={handleClear}
            handleTweetTyping={handleTweetTyping}
            handlePostTweet={handlePostTweet}
            username={username}
            tweet={tweet}
          ></PostTweet>
          <MyTweets tweets={tweets} userId={user.id}></MyTweets>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}
