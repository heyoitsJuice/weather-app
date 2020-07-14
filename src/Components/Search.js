import React, { Component } from "react";

class Search extends Component {
  state = { city: "" };

  /*componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state.city) {
      this.setState({ city: this.state.city });
    }
  }*/

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.city === "") {
      alert("Please enter a city");
    } else {
      this.props.search(this.state.city);
    }

    this.setState({ city: "" });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div className="search">
        <div className="searchChild">
          <h5 className="text-black"> Type the city you want to check</h5>
          <form onSubmit={this.onSubmit} className="formSearch">
            <input
              type="text"
              name="city"
              id="inputSearch"
              onChange={this.onChange}
            />
            <button
              type="submit"
              className="btn btn-outline-info text-black"
              Search
            ></button>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
