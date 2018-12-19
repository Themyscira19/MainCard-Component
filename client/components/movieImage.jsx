import React from "react";

const MovieImage = props => {
  return (
    <div id="movie-image-section" className="col-sm-7 col-xs-9">
      <div className="center">
        <a
          id="poster_link"
          className="trailer_play_action_button"
          data-title="The Mule"
          data-video-id="A425CF20-24AE-4491-846C-E009482708EF"
          data-mpx-fwsite="rotten_tomatoes_video_vod"
        >
          <img
            src="/assets/pizza-pie/images/poster_default.c8c896e70c3.gif"
            className="posterImage js-lazyLoad"
            sizes="(max-width: 480px) 100vw"

            // style=" -webkit-animation: overlay-fade 1s 1; -o-animation: overlay-fade 1s 1; animation: overlay-fade 1s 1;"
          />

          <span className="play_button_big" />
        </a>

        <div
          id="critics-add-article"
          className="hidden-xs hide js-critics-add-article"
        >
          <a href="https://www.rottentomatoes.com/critics/tools/movie/?movieId=771498943">
            Add Article
          </a>
        </div>
      </div>
    </div>
  );
};
export default MovieImage;
