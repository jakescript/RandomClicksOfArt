import React, { Component } from 'react';
import './art.css';
import { FaArrowCircleRight } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

class Art extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      record: null
    }

    document.addEventListener("keydown", (evt) => {
      if (evt.keyCode === 39) {
        this.handleNext()
      }
    })
  }

  handleNext = () => {
    this.setState({ loading: true })
    let apiKey = "c10622c0-b3ec-11ea-8f0d-21177cb1a6f5"
    let artworkID = Math.floor(Math.random() * 234998)
    let url = "https://api.harvardartmuseums.org/object?apikey=" + apiKey + "&page=" + artworkID + "&size=1"
    fetch(url)
      .then(res => res.json())
      .then(json => {
        console.log(json.records[0])
        this.setState({ record: json.records[0], loading: false })
        if (!json.records[0].primaryimageurl) {
          this.handleNext()
        }
      })
  }

  render() {
    if (this.state.loading) {
      return <div className="loading">Gathering A New Piece...</div>
    }

    if (!this.state.record) {
      return (
        <div className="welcome">
          <div className="welcome-items">
            <h1>Welcome to random clicks of art!</h1>
            <FaEye className="button-cursor" size="3em" onClick={this.handleNext} />
          </div>
        </div>
      )
    }

    let nameList = null
    if (this.state.record.people) {
      nameList = this.state.record.people.map(name => {
        return (
          <h2 key={name.personid}> {name.name} </h2>
        )
      })
    }

    return (
      <div>
        <div className="wrapper">
          <div className="art-titles">
            <h1> {this.state.record.title} </h1>
            {nameList}
            <h3> {this.state.record.culture} {this.state.record.dated} </h3>
            <h4> {this.state.record.description} </h4>
            <h4> {this.state.record.technique} </h4>

          </div>

          <div className="image-container">
            {this.state.record.primaryimageurl ? <img alt="art-image" className="art-img" src={this.state.record.primaryimageurl} /> : <div>No Img</div>}
          </div>
        </div>
        <div className="next-section">
          <FaArrowCircleRight size="2em" className="button-cursor" onClick={this.handleNext} />
          <p>(right arrow key)</p>
        </div>
      </div>
    )
  }
}

export default Art;
