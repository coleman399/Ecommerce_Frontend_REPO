import React, { Component } from 'react';
import './SearchBar.css'

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit() {
        this.props.startSearch(this.state.search)
        this.setState({
            search: ''
        })
    }

    render() {
        return (
            <div className = "searchbar">
                <input value = {this.state.search} name = "search" onChange = {this.handleChange}></input>
                <button className = "searchbutton" onClick = {() => this.handleSubmit(this.state.search)}>&#128064;</button>
            </div>
        )
    }
}

export default SearchBar;