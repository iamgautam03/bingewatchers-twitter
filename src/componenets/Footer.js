import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';
export default function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      link: 'https://github.com/iamgautam03/',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/gautam-patel-b0b2471b6',
    },
    {
      name: 'Email',
      link: 'gautampatelg2000@gmail.com',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/itsmegautam03',
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/iamgautam03/',
    },
  ];
  return (
    <div className="container-fluid footer mt-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 my-4">
            <Link
              className="d-inline-flex align-items-center mb-2 text-decoration-none"
              style={{ color: 'var(--my-red)' }}
              to="/"
              aria-label="Bootstrap"
            >
              <span
                className="fs-5"
                style={{ fontFamily: 'var(--header-font)' }}
              >
                Binge Watcher's Twitter
              </span>
            </Link>
            <ul className="list-unstyled small">
              <li className="mb-2">Designed and built by Gautam Patel.</li>
              <li className="mb-2">
                Special thanks to{' '}
                <a style={{ color: 'var(--my-white)' }} href="flaticon.com">
                  Flaticon
                </a>{' '}
                for providing free icons.
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-4 offset-lg-1 my-4">
            <h5 className="fw-bold" style={{ color: 'var(--my-white)' }}>
              Links
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  className="text-decoration-none"
                  style={{ color: 'var(--my-white)' }}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="text-decoration-none"
                  style={{ color: 'var(--my-white)' }}
                  to="/trending"
                >
                  Trending
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="text-decoration-none"
                  style={{ color: 'var(--my-white)' }}
                  to="/auth"
                >
                  Login or SingUp
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-4 my-4">
            <SocialLinks socialLinks={socialLinks} title="Social" />
          </div>
        </div>
      </div>
    </div>
  );
}
