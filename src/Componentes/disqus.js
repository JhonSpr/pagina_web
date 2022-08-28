/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react"
import Disqus from "disqus-react"

export default class extends Component {
  render() {
    const disqusShortname = "animekuns"
    const disqusConfig = {
      url: "https://animekuns.netlify.app/",
      identifier: "Animes-id",
      title: "Animes"
    }

    return (
      <div className="article-container">

        <h1>Page Title</h1>

        <p>Page content.</p>

        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    )
  }
}