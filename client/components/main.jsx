import React, { Component } from "react";
import Video from "./video.jsx";
import Poster from "./poster.jsx";
import Score from "./score.jsx";
import Rating from "./rating.jsx";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      movie: {
        _id: "",
        id: "",
        video: {
          title: "",
          year: "",
          video: ""
        },
        poster: {
          image: ""
        },
        score: {
          all_critics: {
            tomatometer: "",
            average_rating: "",
            reviews_counted: "",
            fresh: "",
            rotten: ""
          },
          consensus: "",
          audience: {
            audience_score: "",
            average_rating: "",
            user_rating: ""
          },
          top_critics: {
            tomatometer: "",
            average_rating: "",
            reviews_counted: "",
            fresh: "",
            rotten: ""
          }
        }
      },
      all: true,
      trailer: false
    };
    this.getMovie = this.getMovie.bind(this);
    this.toggleTopCritics = this.toggleTopCritics.bind(this);
    this.toggleTrailer = this.toggleTrailer.bind(this);
  }

  componentDidMount() {
    this.getMovie();
  }

  toggleTopCritics(e) {
    let bool = e.target.id === "all" ? true : false;
    this.setState({ all: bool });
  }

  toggleTrailer() {
    this.setState({ trailer: !this.state.trailer });
  }

  getMovie(id = 198) {
    fetch(`/movies/${id}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ movie: data[0] });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div id="mainColumn" className="col mob col-center-right col-full-xs">
        <Video
          video={this.state.movie.video}
          trailer={this.state.trailer}
          toggleTrailer={this.toggleTrailer}
        />
        <div id="topSection">
          <Poster poster={this.state.movie.poster} />
          <Score
            all_critics={this.all_critics}
            score={this.state.movie.score}
            toggleTopCritics={this.toggleTopCritics}
            all={this.state.all}
          />
          <Rating />
        </div>
      </div>
    );
  }
}

export default Main;