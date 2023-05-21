import React from 'react';
import Tweet from './Tweet';
export default function TweetGrid() {
  const tweets = [
    {
      name: 'Jay Radediya',
      postedOn: '3rd Dec 2021',
      tweet: 'Best series i have ever watched so far "Dark", its mind bending.',
    },
    {
      name: 'Gautam Patel',
      postedOn: '12th Jan 2022',
      tweet:
        'Have all of you watched the anime attack on titan, it is so good as the last part has been started the popular platform crunchyroll got crashed on first episode due to heavt load!',
    },
    {
      name: 'Alvin James',
      postedOn: '1st Jan 2022',
      tweet: 'Egarly waiting for the season-2 of popular web series Asur.',
    },
    {
      name: 'Vrajbandhu Behera',
      postedOn: '3rd Jan 2022',
      tweet:
        'Though last season of money hiest was so hyped the ending was not so good which lead the series to not meet up to the mark of fans.',
    },
  ];
  return (
    <div className="container">
      <div className="row my-5 mx-1">
        <h3 className="text-center">See What's Happening Around</h3>
        <Tweet tweets={tweets} />
      </div>
    </div>
  );
}
