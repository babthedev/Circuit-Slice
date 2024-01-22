import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const Twitter = () => {
  return (
    <div className='mx-auto w-2/3 mt-8'>
      <TwitterTweetEmbed
        tweetId={'1749494455126622471'}
        options={{
          dnt: true,
          lang: 'en',
        }}
      />
    </div>
  );
};

export default Twitter;
