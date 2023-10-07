import React from 'react';
import auth from '../apis/auth';
import TweetLike from './TweetLike';
import { tweetsAPI } from '../apis/tweet';

export default function Tweet(props) {
  const removeTweet = async (tweet, ev) => {
    let authUser = auth.getUser();
    if (tweet.createdBy == authUser.id) {
      await tweetsAPI.remove(tweet.id);
    }
  };
  return props.tweets.map((tweet, index) => {
    return (
      <div
        key={index}
        className="tweet-box col-12 col-lg-10 col-xl-8 col-xxl-6 offset-lg-1 offset-xl-2 offset-xxl-3 p-1 border rounded-3 shadow-sm my-2"
      >
        <div className="d-flex ms-2 mt-2">
          <div>
            <img
              className="rounded-circle"
              src={`https://api.dicebear.com/7.x/initials/svg?seed=${tweet.tweetBy}`}
              alt="avater-alt"
              height="48px"
              width="48px"
            />
          </div>
          <div>
            <span className="fw-bold ms-2">{tweet.tweetBy}</span>
            <br />
            <span className="text-muted ms-2 fw-light">
              <small>
                Posted On {new Date(tweet.createdOn).toLocaleString()}
              </small>
            </span>
          </div>
        </div>
        <div className="d-flex ms-2 mt-2">
          <div>{tweet.tweet}</div>
        </div>
        <div className="d-flex justify-content-start align-items-center ms-2 my-1 fs-5">
          <TweetLike tweet={tweet}></TweetLike>
          {props.userId === tweet.createdBy && (
            <div className="ms-2 delete-icon">
              <svg
                onClick={removeTweet.bind(this, tweet)}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_168_222)">
                  <path
                    d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_168_222">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          )}
        </div>
      </div>
    );
  });
}
