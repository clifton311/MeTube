import React from 'react';

class SearchBar extends React.Component{

  state = {term: ''}

  inputChange = (e) => {
    this.setState({
      term: e.target.value
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    // TODO: make sure we callback from parent component
    this.props.onFormSubmit(this.state.term)
  }

  render() {
    return (
      <div className=" search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search for Video </label>
            <input 
              type="text"
              value={this.state.term}
              onChange={this.inputChange}
             />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar