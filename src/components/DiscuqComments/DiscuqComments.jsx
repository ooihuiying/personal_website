import { DiscussionEmbed } from "disqus-react"
import React from 'react';

export const DisqusComments = ({ post, url } = {}) => {
  const disqusShortname = "https-ooihuiying-github-io-personal-website-1"
  const disqusConfig = {
    // url: url,
    url: `${url}/${post.id}`,
    identifier: `#${post.id}`, // Single post id
    title: post.title // Single post title
  }
  console.log("DISCUQ");
  console.log(disqusConfig);
  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
};
