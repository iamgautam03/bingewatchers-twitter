import React from 'react';
export default function PostTweet(props) {
  return (
    <div className="container">
      <div className="row my-5 mx-1">
        <h3
          style={{ fontFamily: 'var(--header-font)' }}
          className="text-center"
        >
          Why to not Tweet Something:)
        </h3>
        <div className="tweet-box col-12 col-lg-10 col-xl-8 col-xxl-6 offset-lg-1 offset-xl-2 offset-xxl-3 p-1 border rounded-3 shadow-md my-2">
          <div className="d-flex ms-2 mt-2">
            <div>
              <img
                className="rounded-circle"
                src={`https://api.dicebear.com/7.x/initials/svg?seed=${props.username}`}
                alt="avater-alt"
                height="48px"
                width="48px"
              />
            </div>
            <div>
              <span className="fw-bold ms-2">{props.username}</span>
              <br />
              <span className="text-muted ms-2 fw-light">
                <small>Tweet Something Now</small>
              </span>
            </div>
          </div>
          <div className="d-flex m-2">
            <textarea
              className="form-control"
              id="tweetbox"
              rows="6"
              placeholder="Start Tweeting"
              onChange={props.handleTweetTyping}
              value={props.tweet}
            ></textarea>
          </div>
          <div className="d-flex justify-content-end mx-2 mb-3">
            <button
              className="btn btn-lg btn-primary me-2"
              onClick={props.handlePostTweet}
            >
              Tweet
            </button>
            <button
              className="btn btn-lg btn-secondary"
              onClick={props.handleClear}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
