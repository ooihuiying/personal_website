import { DiscussionEmbed } from "disqus-react"
import React from 'react';

export const DisqusComments = ({ post, url } = {}) => {
  const disqusShortname = "https-ooihuiying-github-io-personal-website"
  const disqusConfig = {
    url: url,
    identifier: post.id, // Single post id
    title: post.title // Single post title
  }
  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
};
