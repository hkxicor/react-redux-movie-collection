import React, { Component } from 'react'
import './index.css'


export default class NavigationBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchText: ''
    }
    this.search = this.search.bind(this)
  }
  search(){
    this.props.searchMovie(this.state.searchText)
    this.setState({...this.state, searchText: ''})
  }
  render() {
    return (
      <div>
      <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Movieflex</a>
        </div>
        <form className="navbar-form navbar-right" role="search">
          <div className="form-group">
            <input type="text" value={this.state.searchText} onChange={ (text) => this.setState({searchText: text.target.value })} className="form-control" placeholder="Search Movies" />
          </div>
          <button onClick={this.search} type="button" className="btn btn-default">Search</button>
        </form>
      </div>
    </nav>
  </div>
    )
  }
}
