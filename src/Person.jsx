import React from 'react';
import {connect} from "react-redux";
import Dropdown from "./Movietemplate";

const categories = ["company", "job", "city", "gender"]

const Person = (props) => {
   // const {props.data, props.orderBy} = props.person.data;

    //const input = categories; // array from the bottom of this script
    const output = props.person.person.map((data) => {

        return <div>{ data.first_name }{console.log(data.id)}</div>
    });
    return (


        <div className="media">
            <div className="media-left">


                  {/*  <img className="media-object" src={ props.person.person.first_name }  />*/}

            </div>
            <div className="media-body">
                     <h4 className="media-heading">
                        <span className={ props.orderBy === "first_name" ? "active" : null }>{ props.person.person.first_name } </span>
                        <span className={ props.orderBy === "last_name" ? "active" : null }>{ props.person.person.last_name }</span>
                    </h4>
                {/*   <div><small>about:</small> { data.about }</div>*/}
                {output}
                {/*   <div><small>email:</small> <a href={ data.email }> { data.email } </a></div>*/}
            </div>
        </div>
    )
}


export default Person


/*

import React from 'react';
import {connect} from "react-redux";
import Dropdown from "./Dropdown";

const categories = ["company","job","city","gender"]

class Person extends React.Component {
    render(){
        console.log(this)
        const { data, orderBy } = state.person.data;
        const input = categories; // array from the bottom of this script
        const output = input.map((data)=>{

            return <div><small className={ orderBy === data ? "active" : null }>{data}:</small> {data[data] }</div>
        });
        return (
            <div className="media">
                <div className="media-left">

                    {/!*
                    <img className="media-object" src={ this.props.data.img } alt={`${this.props.data.first_name} ${data.last_name}` } />
*!/}
                </div>
                <div className="media-body">
                    {/!*     <h4 className="media-heading">
                        <span className={ orderBy === "first_name" ? "active" : null }>{ this.props.data.first_name } </span>
                        <span className={ orderBy === "last_name" ? "active" : null }>{ data.last_name }</span>
                    </h4>*!/}
                    {/!*   <div><small>about:</small> { data.about }</div>*!/}
                    {output}
                    {/!*   <div><small>email:</small> <a href={ data.email }> { data.email } </a></div>*!/}
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    console.log(state.person)
    return {
        person: state.person
    }
}
Person = connect(mapStateToProps)(Person);

export default Person*/
