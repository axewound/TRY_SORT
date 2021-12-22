import React from 'react';
import Person from "./Person";
import _ from "lodash";
import {connect} from "react-redux";

class Movietemplate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.movies)
        const {genre, rating, poster,title} = this.props.movies   ;
        return (
            <figure>
                <img src={poster}/>
                <figcaption>
                    <p>{genre.join(" ")}</p>
                    <div className="rating">
                        <i className="fa fa-heart"/>
                        <h4>{rating}</h4>
                        <h5>{title}</h5>
                    </div>
                </figcaption>
            </figure>
        );
    }
}
export default Movietemplate

/*

let mapStateToProps = (state) => {
    console.log(state.person)
    return {
        person: state.person.data
    }
}
Dropdown = connect(mapStateToProps)(Person);

export default Dropdown*/
