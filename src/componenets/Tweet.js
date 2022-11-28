import React from 'react';

export default function Tweet(props) {
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
              src={`https://avatars.dicebear.com/api/initials/${tweet.name}.svg`}
              alt="avater-alt"
              height="48px"
              width="48px"
            />
          </div>
          <div>
            <span className="fw-bold ms-2">{tweet.name}</span>
            <br />
            <span className="text-muted ms-2 fw-light">
              <small>Posted On {tweet.postedOn}</small>
            </span>
          </div>
        </div>
        <div className="d-flex ms-2 my-2">
          <div>{tweet.tweet}</div>
        </div>
      </div>
    );
  });
}
