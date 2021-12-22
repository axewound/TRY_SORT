import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Dropdown from "./Movietemplate";
import Person from "./Person";
import _ from "lodash";
import {connect} from "react-redux";
import Movietemplate from "./Movietemplate";



function strip(title) {
    return title.replace(/^(a|an|the)\s/i, "");
}


class App extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
        movies: this.props.movies.movies,
            value: "Sort"
        };
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    };

    handleSubmit = (e) => {

        const { value, movies } = this.state;

        switch (value) {
            case "Low rating":
                this.setState({
                    movies: movies.sort((a, b) => (a.rating > b.rating ? 1 : -1))
                });
                break;
            case "High rating":
                this.setState({
                    movies: movies.sort((a, b) => (b.rating > a.rating ? 1 : -1))
                });
                break;
            case "A-Z":
                this.setState({
                    movies: movies.sort((a, b) =>
                        strip(a.title) > strip(b.title) ? 1 : -1
                    )
                });
                break;
            case "Z-A":
                this.setState({
                    movies: movies.sort((a, b) =>
                        strip(b.title) > strip(a.title) ? 1 : -1
                    )
                });
                break;
            default:
                this.setState({
                    movies: movies
                });
                break;
        }

        e.preventDefault();
    };

    render() {
      //  console.log(this.state)
      //  console.log(this.props)

        const { movies, value } = this.state;
      //  console.log(this.state)

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <select id="rating-filter" value={value} onChange={this.handleChange}>
                        <option value="Sort">Sort</option>
                        <option value="Low rating">Low rating</option>
                        <option value="High rating">High rating</option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                    </select>
                    <input type="submit" value="Filter" />
                </form>
                <section>

                    {this.props.movies.movies.map((m) => (
                        <Movietemplate movies={m} />
                    ))}
                </section>
            </div>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        movies: state.movies.data
    }
}
App = connect(mapStateToProps)(App);



export default App;